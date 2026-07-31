package ClmEcommerceApplication.projetoWeb1.controller;

import ClmEcommerceApplication.projetoWeb1.model.entities.Produto;
import ClmEcommerceApplication.projetoWeb1.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/destaque")
    private List<Produto> listaProdutosDestaque(){
        return produtoService.listaProdutoDestaque();
    }

    @GetMapping("/produtos.html")
    public List<String> listar() {
        return produtoService.listarProdutos();
    }
}
