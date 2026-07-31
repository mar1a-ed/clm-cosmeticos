package ClmEcommerceApplication.projetoWeb1.model.entities;

import ClmEcommerceApplication.projetoWeb1.model.enums.StatusCompra;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
public class Carrinho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnore
    private Usuario usuario;

    @OneToMany(mappedBy = "carrinho")
    @JsonIgnore
    private List<ItemCarrinho> itens;

    private LocalDate dataCompra;

    private Double valorTotal;

    private StatusCompra statusCompra;
}
