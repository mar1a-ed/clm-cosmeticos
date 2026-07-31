package ClmEcommerceApplication.projetoWeb1.repository;

import ClmEcommerceApplication.projetoWeb1.model.entities.Carrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarrinhoRepository extends JpaRepository<Carrinho,Integer> {
}
