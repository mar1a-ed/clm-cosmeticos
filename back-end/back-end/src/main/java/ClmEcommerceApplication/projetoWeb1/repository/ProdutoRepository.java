package ClmEcommerceApplication.projetoWeb1.repository;

import ClmEcommerceApplication.projetoWeb1.model.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produto,Integer> {

    List<Produto> findAll();

    List<Produto> findByDestaqueTrue();
}
