package ClmEcommerceApplication.projetoWeb1.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class FavoritoRequestDTO {

    private Integer produtoId;

    private String userEmail;
}
