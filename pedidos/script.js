document.addEventListener('DOMContentLoaded', carregarCarrinho);

function carregarCarrinho() {
    const container = document.getElementById('container-produtos'); 
    const totalElement = document.getElementById('valor-total'); 
    
    let carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce')) || [];

    if (carrinho.length === 0) {
        container.innerHTML = '<p style="text-align:center;">Seu carrinho está vazio.</p>';
        if (totalElement) totalElement.innerText = 'R$ 0,00';
        return;
    }

    let htmlCarrinho = '';
    let valorTotalPedido = 0;

    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        valorTotalPedido += subtotal;

        htmlCarrinho += `
            <div class="card-carrinho" id="carrinho-item-${item.id}">
                <img src="${item.imagem}" alt="${item.nome}" style="width: 100px;">
                <div class="info-produto">
                    <h3>${item.nome}</h3>
                    <p>Preço un: R$ ${Number(item.preco).toFixed(2).replace('.', ',')}</p>
                </div>
                <div class="controle-quantidade">
                    <button onclick="alterarQuantidade(${item.id}, -1)"> - </button>
                    <span style="padding: 0 10px;">${item.quantidade}</span>
                    <button onclick="alterarQuantidade(${item.id}, 1)"> + </button>
                </div>

                <div class="subtotal-produto">
                    <p>Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}</p>
                </div>

                <button class="btn-remover" onclick="removerItemCarrinho(${item.id})">Remover 🗑️</button>
            </div>
            <hr>
        `;
    });

    container.innerHTML = htmlCarrinho;
    
    if (totalElement) {
        totalElement.innerText = `R$ ${valorTotalPedido.toFixed(2).replace('.', ',')}`;
    }
}

function alterarQuantidade(idProduto, mudanca) {
    let carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce')) || [];
    
    // Busca o produto dentro do array do carrinho
    let produto = carrinho.find(item => item.id === idProduto);
    
    if (produto) {
        produto.quantidade += mudanca; // Soma ou subtrai
        
        // Se a quantidade chegar a zero, removemos o produto da lista
        if (produto.quantidade <= 0) {
            carrinho = carrinho.filter(item => item.id !== idProduto);
        }
    }
    
    // Salva o carrinho atualizado no navegador
    localStorage.setItem('carrinhoEcommerce', JSON.stringify(carrinho));
    
    // Recarrega a tela para atualizar os números instantaneamente!
    carregarCarrinho();
}

function removerItemCarrinho(idProduto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce')) || [];
    carrinho = carrinho.filter(item => item.id !== idProduto);
    localStorage.setItem('carrinhoEcommerce', JSON.stringify(carrinho));
    carregarCarrinho();
}

function finalizarCompra(){
    const userLogado = JSON.parse(localStorage.getItem('userLogado'));
    const carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce'));

    if(!userLogado){
        alert("Você precisa fazer login para finalizar a compra!");
        window.location.href = '../login/login-cadastro.html';
        return;
    }

    if(!carrinho || carrinho.length === 0){
        alert("Carrinho vazio. Adicione itens para finalizar a compra!");
        return;
    }

    const dadosPedido = {
        userEmail: userLogado.email,
        itens: carrinho.map(item => ({produtoId: item.id, qtd: item.quantidade}))
    };

    fetch('http://localhost:8080/carrinhos/finalizar-compra',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosPedido)
    })
    .then(async(response) =>{
        if(response.ok){
            alert("Compra finalizada com sucesso!");
            localStorage.removeItem('carrinhoEcommerce');
            window.location.href = '../inicio/inicio.html';
        }else{
            const erro = await response.text();
            alert(erro);
        }
    })
    .catch(error =>{
        console.error('Erro: ',error);
        alert("Erro de conexão com servidor.");
    })
}

