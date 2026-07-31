package ClmEcommerceApplication.projetoWeb1.service;

import ClmEcommerceApplication.projetoWeb1.model.entities.Produto;
import ClmEcommerceApplication.projetoWeb1.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public void save(Produto produto){
        produtoRepository.save(produto);
    }

    public List<Produto> listaProdutoDestaque(){
        List<Produto> produtos = produtoRepository.findByDestaqueTrue();

        return produtos;
    }

    public List<Produto> findAll(){
        return produtoRepository.findAll();
    }

    public List<String> listarProdutos(){

        List<Produto> produtos = produtoRepository.findAll();

        return JsonService.objetosParaJson(produtos);
    }
}
