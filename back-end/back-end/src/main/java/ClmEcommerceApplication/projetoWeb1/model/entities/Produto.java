package ClmEcommerceApplication.projetoWeb1.model.entities;

import ClmEcommerceApplication.projetoWeb1.model.enums.TipoProduto;
import ClmEcommerceApplication.projetoWeb1.model.enums.Categoria;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String descricao;

    private Double preco;

    private Integer estoque;

    private String imagem;
    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    @Enumerated(EnumType.STRING)
    private TipoProduto tipoProduto;

    private Boolean destaque;
}


