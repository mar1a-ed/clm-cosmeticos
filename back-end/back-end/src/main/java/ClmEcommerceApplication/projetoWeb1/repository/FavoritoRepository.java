package ClmEcommerceApplication.projetoWeb1.repository;

import ClmEcommerceApplication.projetoWeb1.model.entities.Favorito;
import ClmEcommerceApplication.projetoWeb1.model.entities.Produto;
import ClmEcommerceApplication.projetoWeb1.model.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoritoRepository extends JpaRepository<Favorito, Long> {
    Favorito findByUsuarioAndProduto(Usuario usuario, Produto produto);

    List<Favorito> findByUsuario(Usuario usuario);
}
