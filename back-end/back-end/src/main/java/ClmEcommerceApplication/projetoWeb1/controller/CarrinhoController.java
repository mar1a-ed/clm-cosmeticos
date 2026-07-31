package ClmEcommerceApplication.projetoWeb1.controller;

import ClmEcommerceApplication.projetoWeb1.dto.CarrinhoRequestDTO;
import ClmEcommerceApplication.projetoWeb1.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrinhos")
@CrossOrigin(origins = "*")
public class CarrinhoController {

    @Autowired
    private CarrinhoService carrinhoService;

    @PostMapping("/finalizar-compra")
    public ResponseEntity<?> finalizarCompra(@RequestBody CarrinhoRequestDTO carrinhoDto){
        try{
            carrinhoService.finalizarCompra(carrinhoDto);
            return ResponseEntity.ok("Compra finalizada com sucesso!");
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Erro ao finalizar a compra. Tente novamente mais tarde"+e.getMessage());
        }
    }
}
