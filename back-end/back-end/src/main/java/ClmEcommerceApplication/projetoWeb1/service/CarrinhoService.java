package ClmEcommerceApplication.projetoWeb1.service;

import ClmEcommerceApplication.projetoWeb1.dto.CarrinhoRequestDTO;
import ClmEcommerceApplication.projetoWeb1.dto.ItemCarrinhoRequestDTO;
import ClmEcommerceApplication.projetoWeb1.exceptions.ProdutoNotFoundException;
import ClmEcommerceApplication.projetoWeb1.exceptions.UsuarioNotFoundException;
import ClmEcommerceApplication.projetoWeb1.model.entities.Carrinho;
import ClmEcommerceApplication.projetoWeb1.model.entities.ItemCarrinho;
import ClmEcommerceApplication.projetoWeb1.model.entities.Produto;
import ClmEcommerceApplication.projetoWeb1.model.entities.Usuario;
import ClmEcommerceApplication.projetoWeb1.model.enums.StatusCompra;
import ClmEcommerceApplication.projetoWeb1.repository.CarrinhoRepository;
import ClmEcommerceApplication.projetoWeb1.repository.ItemCarrinhoRepository;
import ClmEcommerceApplication.projetoWeb1.repository.ProdutoRepository;
import ClmEcommerceApplication.projetoWeb1.repository.UsuarioRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
public class CarrinhoService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    @Autowired
    private ItemCarrinhoRepository itemCarrinhoRepository;

    @Transactional
    public void finalizarCompra(CarrinhoRequestDTO carrinhoDto) {

        Usuario user = usuarioRepository.findByEmail(carrinhoDto.getUserEmail());

        if(user == null) {
            throw new UsuarioNotFoundException("Erro. Usuário não encontrado!");
        }

        Carrinho carrinho = new Carrinho();
        carrinho.setUsuario(user);
        carrinho.setDataCompra(LocalDate.now());
        carrinho.setValorTotal(0.0);
        carrinho.setStatusCompra(StatusCompra.AGUARDANDO_PAGAMENTO);

        carrinhoRepository.save(carrinho);

        double total = 0.0;

        for(ItemCarrinhoRequestDTO itemCarrinhoRequestDTO: carrinhoDto.getItens()){
            Produto produto = produtoRepository.findById(itemCarrinhoRequestDTO.getProdutoId()).orElseThrow(
                    () -> new ProdutoNotFoundException("Produto não encontrado")
            );

            ItemCarrinho itemCarrinho = new ItemCarrinho();
            itemCarrinho.setCarrinho(carrinho);
            itemCarrinho.setProduto(produto);
            itemCarrinho.setQuantidade(itemCarrinhoRequestDTO.getQtd());
            itemCarrinho.setPrecoUnitario(produto.getPreco());

            total += (produto.getPreco() * itemCarrinhoRequestDTO.getQtd());

            itemCarrinhoRepository.save(itemCarrinho);
        }

        carrinho.setValorTotal(total);
        carrinhoRepository.save(carrinho);
    }
}















