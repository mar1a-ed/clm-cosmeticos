package ClmEcommerceApplication.projetoWeb1.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class UsuarioUpdateSenhaDTO {

    private String senhaAtual;

    private String novaSenha;
}
