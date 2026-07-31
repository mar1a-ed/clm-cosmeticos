package ClmEcommerceApplication.projetoWeb1;

import ClmEcommerceApplication.projetoWeb1.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class ProjetoWeb1Application implements CommandLineRunner {

    @Autowired
    private ProdutoService produtoService;

	public static void main(String[] args) {
		SpringApplication.run(ProjetoWeb1Application.class, args);
	}

    @Override
    public void run(String... args) {

        System.out.println("Aplicação iniciada!");

        List<String> lista = produtoService.listarProdutos();

        System.out.println(lista);

    }
}
