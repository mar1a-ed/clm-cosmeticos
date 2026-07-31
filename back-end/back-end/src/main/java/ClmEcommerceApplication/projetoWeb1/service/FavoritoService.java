package ClmEcommerceApplication.projetoWeb1.service;

import ClmEcommerceApplication.projetoWeb1.exceptions.ProdutoNotFoundException;
import ClmEcommerceApplication.projetoWeb1.exceptions.UsuarioNotFoundException;
import ClmEcommerceApplication.projetoWeb1.model.entities.Favorito;
import ClmEcommerceApplication.projetoWeb1.model.entities.Produto;
import ClmEcommerceApplication.projetoWeb1.model.entities.Usuario;
import ClmEcommerceApplication.projetoWeb1.repository.FavoritoRepository;
import ClmEcommerceApplication.projetoWeb1.repository.ProdutoRepository;
import ClmEcommerceApplication.projetoWeb1.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritoService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private FavoritoRepository favoritoRepository;

    public String favoritarOuDesfavoritar(String userEmail, Integer produtoId){

        Usuario usuario = usuarioRepository.findByEmail(userEmail);

        Produto produto = produtoRepository.findById(produtoId).orElseThrow(
                () -> new ProdutoNotFoundException("Produto não encontrado")
        );

        if(usuario == null){
            throw new UsuarioNotFoundException("Usuário não encontrado");
        }

        Favorito favoritoExiste = favoritoRepository.findByUsuarioAndProduto(usuario, produto);

        if(favoritoExiste != null){
            favoritoRepository.delete(favoritoExiste);
            return "Produto removido dos favoritos";
        }else{
            Favorito favoritoNovo = new Favorito();
            favoritoNovo.setUsuario(usuario);
            favoritoNovo.setProduto(produto);
            favoritoRepository.save(favoritoNovo);
            return "Produto adicionado aos favoritos";
        }
    }

    public List<Favorito> listaFavoritos(String userEmail){
        Usuario usuario = usuarioRepository.findByEmail(userEmail);
        if(usuario == null) {
            throw new UsuarioNotFoundException("Usuário não encontrado");
        }

        return favoritoRepository.findByUsuario(usuario);
    }
}
