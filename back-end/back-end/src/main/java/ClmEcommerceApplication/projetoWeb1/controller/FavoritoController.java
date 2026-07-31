package ClmEcommerceApplication.projetoWeb1.controller;

import ClmEcommerceApplication.projetoWeb1.dto.FavoritoRequestDTO;
import ClmEcommerceApplication.projetoWeb1.model.entities.Favorito;
import ClmEcommerceApplication.projetoWeb1.service.FavoritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favoritos")
@CrossOrigin(origins = "*")
public class FavoritoController {

    @Autowired
    private FavoritoService favoritoService;

    @PostMapping("/alternar")
    public ResponseEntity<?> favoritarOuDesfavoritar(@RequestBody FavoritoRequestDTO favoritoDTO){
        try{
            String msg = favoritoService.favoritarOuDesfavoritar(favoritoDTO.getUserEmail(), favoritoDTO.getProdutoId());
            return ResponseEntity.ok(msg);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e.getMessage());
        }
    }

    @GetMapping("/listar/{email}")
    public ResponseEntity<?> listaFavoritos(@PathVariable String email){
        try{
            List<Favorito> favoritoList = favoritoService.listaFavoritos(email);
            return ResponseEntity.ok(favoritoList);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro: " + e.getMessage());
        }
    }
}
