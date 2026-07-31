package ClmEcommerceApplication.projetoWeb1.repository;

import ClmEcommerceApplication.projetoWeb1.model.entities.ItemCarrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemCarrinhoRepository extends JpaRepository<ItemCarrinho, Long> {
}
