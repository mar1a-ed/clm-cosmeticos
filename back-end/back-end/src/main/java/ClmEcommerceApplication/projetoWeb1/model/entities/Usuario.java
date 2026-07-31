package ClmEcommerceApplication.projetoWeb1.model.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String sobrenome;

    private String telefone;

    private LocalDate dataNascimento;

    private String cpf;

    private String endereco;

    private String genero;

    @Column(unique = true)
    private String email;

    private String senha;

    @OneToMany(mappedBy = "usuario")
    private List<Carrinho> carrinhosList;

}
