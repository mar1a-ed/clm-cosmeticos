package ClmEcommerceApplication.projetoWeb1.service;

import ClmEcommerceApplication.projetoWeb1.dto.UsuarioUpdateDTO;
import ClmEcommerceApplication.projetoWeb1.exceptions.UsuarioNotFoundException;
import ClmEcommerceApplication.projetoWeb1.model.entities.Usuario;
import ClmEcommerceApplication.projetoWeb1.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void cadastrar(Usuario usuario){
        usuarioRepository.save(usuario);
    }

    public Usuario login(String email, String senha){
        Usuario usuario = usuarioRepository.findByEmailAndSenha(email, senha);
        return usuario;
    }

    public Usuario updateDados(String userEmail, UsuarioUpdateDTO usuarioUpdateDTO){
        try{
         Usuario usuario = usuarioRepository.findByEmail(userEmail);

         if(usuario == null){
             throw new UsuarioNotFoundException("Erro. Usuário não encontrado.");
         }

         usuario.setNome(usuarioUpdateDTO.getNome());
         usuario.setSobrenome(usuarioUpdateDTO.getSobrenome());
         usuario.setTelefone(usuarioUpdateDTO.getTelefone());
         usuario.setDataNascimento(usuarioUpdateDTO.getDataNascimento());
         usuario.setCpf(usuarioUpdateDTO.getCpf());
         usuario.setEndereco(usuarioUpdateDTO.getEndereco());
         usuario.setGenero(usuarioUpdateDTO.getGenero());

         usuarioRepository.save(usuario);

         return usuario;
        }catch (Exception e){
            throw new RuntimeException("Erro: " + e.getMessage());
        }
    }

    public Usuario updatePassword(String userEmail, String passwordAtual, String passwordNova){
        try{
            Usuario usuario = usuarioRepository.findByEmail(userEmail);

            if(usuario == null){
                throw new UsuarioNotFoundException("Erro. Usuário não encontrado");
            }

            usuario.setSenha(passwordNova);

            usuarioRepository.save(usuario);

            return usuario;
        }catch (Exception e){
            throw new RuntimeException("Erro: "+ e.getMessage());
        }
    }
}
