package ClmEcommerceApplication.projetoWeb1.repository;

import ClmEcommerceApplication.projetoWeb1.model.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
    Usuario findByEmailAndSenha(String email, String senha);

    Usuario findByEmail(String userEmail);
}
