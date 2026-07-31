package ClmEcommerceApplication.projetoWeb1.dto;

import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class ItemCarrinhoRequestDTO {

    private Integer produtoId;

    private Integer qtd;
}
