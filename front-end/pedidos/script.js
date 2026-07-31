document.addEventListener('DOMContentLoaded', carregarCarrinho);

function carregarCarrinho() {
    const container = document.getElementById('container-produtos'); 
    
    const subtotalElement = document.getElementById('valor-subtotal'); 
    const totalElement = document.getElementById('valor-total'); 
    
    let carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce')) || [];

    if (carrinho.length === 0) {
        container.innerHTML = '<p style="text-align:center;">Seu carrinho está vazio.</p>';
        if (subtotalElement) subtotalElement.innerText = 'R$ 0,00';
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
    
    const valorFrete = 15.99; 
    const totalComFrete = valorTotalPedido + valorFrete; 

    if (subtotalElement) {
        subtotalElement.innerText = `R$ ${valorTotalPedido.toFixed(2).replace('.', ',')}`;
    }
    
    if (totalElement) {
        totalElement.innerText = `R$ ${totalComFrete.toFixed(2).replace('.', ',')}`;
    }
}

function alterarQuantidade(idProduto, mudanca) {
    let carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce')) || [];
    
    let produto = carrinho.find(item => item.id === idProduto);
    
    if (produto) {
        produto.quantidade += mudanca; 
        
        if (produto.quantidade <= 0) {
            carrinho = carrinho.filter(item => item.id !== idProduto);
        }
    }
    
    localStorage.setItem('carrinhoEcommerce', JSON.stringify(carrinho));
    
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

    window.location.href = '../pagar/pagar.html'; 
}
