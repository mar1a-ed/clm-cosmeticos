package ClmEcommerceApplication.projetoWeb1.dto;

import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class UsuarioUpdateDTO {

    private String nome;
    private String sobrenome;
    private String telefone;
    private LocalDate dataNascimento;
    private String cpf;
    private String endereco;
    private String genero;

}
