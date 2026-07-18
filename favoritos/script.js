document.addEventListener('DOMContentLoaded', carregarFavoritos);

async function carregarFavoritos() {
    const container = document.getElementById('lista-favoritos');
    const userLogado = JSON.parse(localStorage.getItem('userLogado'));

    if (!userLogado) {
        container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; font-size: 1.2rem;">Faça login para visualizar a lista de favoritos.💔</p>';
        return;
    }

    try{
        const response = await fetch(`http://localhost:8080/favoritos/listar/${userLogado.email}`);

        if(!response.ok){
            throw new Error("Falha ao buscar elementos no servidos.");
        }

        const favoritos = await response.json();

        if(favoritos.length === 0){
            container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; font-size: 1.2rem;">Lista de favoritos vazia! Adicione produtos para visualização.💔</p>';
            return;
        }

        let htmlFavoritos = '';

        favoritos.forEach(item => {
            const prodReal = item.produto;

            htmlFavoritos += `
                <div class="card-produto" id="fav-${prodReal.id}">
                    <!-- Botão de remover (Coração preenchido) -->
                    <button class="btn-favorito ativo" onclick="removerFavorito(${prodReal.id})" aria-label="Remover dos favoritos">
                        ♥
                    </button>

                    <img class="imagem-produto" src="${prodReal.imagem ?? 'https://via.placeholder.com/220x160?text=Sem+imagem'}" alt="${prodReal.nome}>
                    
                    <h2>${prodReal.nome}</h2>
                    <p class="preco">R$ ${Number(prodReal.preco).toFixed(2).replace('.', ',')}</p>

                    <!-- Botão que joga o produto pro carrinho -->
                    <button class="btn-carrinho" onclick="moverParaCarrinho(${prodReal.id}, '${prodReal.nome}', ${prodReal.preco}, '${prodReal.imagem}')">
                        Adicionar ao carrinho
                    </button>
                </div>
            `;
        });

        container.innerHTML = htmlFavoritos;

    }catch(error){
        console.log(error);
        container.innerHTML = `<p style="color: red; text-align: center;">Erro ao carregar seus favoritos ${error}.</p>`;
    }

}

function removerFavorito(idProduto) {
    const userLogado = JSON.parse(localStorage.getItem('userLogado'));

    if(!userLogado){
        return;
    }

    const dadosFavoritos = {
        userEmail: userLogado.email,
        produtoId: idProduto
    };

    fetch('http://localhost:8080/favoritos/alternar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosFavoritos)
    })
    .then(async(response) =>{
        if(response.ok){
            const prodRemover = document.getElementById(`fav-${idProduto}`);
            if(prodRemover){
                prodRemover.remove();
            }

            const container = document.getElementById('lista-favoritos');
            if(container.children.length === 0){
                container.innerHTML = '<p style="color: red; text-align: center;">Você ainda não tem nenhum produto favoritado para remover.</p>';
            }
        }
    })
    .catch(error => console.error("Erro: ", error));
}

function moverParaCarrinho(id, nome, preco, imagem) {
    let carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce')) || [];
    let produtoExistente = carrinho.find(item => item.id === id);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({
            id: id,
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1
        });
    }

    localStorage.setItem('carrinhoEcommerce', JSON.stringify(carrinho));
    
    alert(`${nome} foi adicionado ao seu carrinho!`);
    
}