package ClmEcommerceApplication.projetoWeb1.controller;

import ClmEcommerceApplication.projetoWeb1.dto.UsuarioUpdateDTO;
import ClmEcommerceApplication.projetoWeb1.dto.UsuarioUpdateSenhaDTO;
import ClmEcommerceApplication.projetoWeb1.model.entities.Usuario;
import ClmEcommerceApplication.projetoWeb1.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastrar")
    public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario){
        usuarioService.cadastrar(usuario);
        return ResponseEntity.ok(usuario);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario){
        Usuario userLogin = usuarioService.login(usuario.getEmail(), usuario.getSenha());
        if(userLogin!=null){
            return ResponseEntity.ok(userLogin);
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Erro. Não foi possível realizar login! Preencha os dados corretamento.");
        }
    }

    @PutMapping("/atualizar-dados/{userEmail}")
    public ResponseEntity<?> updateDados(@PathVariable String userEmail, @RequestBody UsuarioUpdateDTO usuarioUpdateDTO){
        Usuario usuario = usuarioService.updateDados(userEmail, usuarioUpdateDTO);

        if(usuario!=null){
            return ResponseEntity.ok(usuario);
        }else{
            return ResponseEntity.badRequest().body("Erro. Não foi possível salvar os dados");
        }
    }

    @PutMapping("/atualizar-senha/{userEmail}")
    public ResponseEntity<?> updatePassword(@PathVariable String userEmail, @RequestBody UsuarioUpdateSenhaDTO updateSenhaDTO){
        Usuario usuario = usuarioService.updatePassword(userEmail, updateSenhaDTO.getSenhaAtual(), updateSenhaDTO.getNovaSenha());

        if(usuario!=null){
            if(!usuario.getSenha().equals(updateSenhaDTO.getSenhaAtual())){
                return ResponseEntity.badRequest().body("Não foi possível atualizar senha. Senha atual não confere com a inserida.");
            }
            return ResponseEntity.ok(usuario);
        }else{
            return ResponseEntity.badRequest().body("Não foi possível atualizar senha. Tente novamente mais tarde.");
        }
    }
}
