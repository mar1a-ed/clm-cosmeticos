package ClmEcommerceApplication.projetoWeb1.dto;

import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class CarrinhoRequestDTO {

    private String userEmail;

    private List<ItemCarrinhoRequestDTO> itens;
}
