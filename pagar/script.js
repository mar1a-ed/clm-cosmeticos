document.addEventListener('DOMContentLoaded', function() {
    
    function carregarResumoCheckout() {
        const carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce')) || [];
        
        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
            window.location.href = '../carrinho/carrinho.html';
            return;
        }

        let valorSubtotal = 0;
        
        carrinho.forEach(item => {
            valorSubtotal += (item.preco * item.quantidade);
        });

        const valorFrete = 15.99;
        const valorTotal = valorSubtotal + valorFrete;

        document.getElementById('checkout-subtotal').innerText = `R$ ${valorSubtotal.toFixed(2).replace('.', ',')}`;
        document.getElementById('checkout-total').innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }

    carregarResumoCheckout();

    const radiosPagamento = document.querySelectorAll('input[name="tipoPagamento"]');
    const formCartao = document.getElementById('form-cartao');
    const areaPix = document.getElementById('area-pix');
    const labelsRadio = document.querySelectorAll('.opcao-radio');

    radiosPagamento.forEach(radio => {
        radio.addEventListener('change', function() {
            labelsRadio.forEach(label => label.classList.remove('ativo'));
            this.parentElement.classList.add('ativo');

            if (this.value === 'pix') {
                formCartao.style.display = 'none';
                areaPix.style.display = 'block';
            } else {
                formCartao.style.display = 'grid';
                areaPix.style.display = 'none';
            }
        });
    });

    const btnConfirmar = document.getElementById('btn-confirmar-compra');
    
    btnConfirmar.addEventListener('click', function() {
        const metodoSelecionado = document.querySelector('input[name="tipoPagamento"]:checked').value;
        
        if (metodoSelecionado === 'cartao') {
            const numero = document.getElementById('numeroCartao').value;
            const nome = document.getElementById('nomeCartao').value;
            if (!numero || !nome) {
                alert("Por favor, preencha os dados do cartão para continuar.");
                return;
            }
        }

        const userLogado = JSON.parse(localStorage.getItem('userLogado'));
        const carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce'));

        if(!userLogado || !carrinho || carrinho.length === 0){
            alert("Sessão expirada ou carrinho vazio.");
            window.location.href = '../carrinho/carrinho.html';
            return;
        }

        const dadosPedido = {
            userEmail: userLogado.email,
            itens: carrinho.map(item => ({produtoId: item.id, qtd: item.quantidade}))
        };

        btnConfirmar.textContent = "Processando pagamento...";
        btnConfirmar.disabled = true;
        btnConfirmar.style.opacity = '0.7';

        fetch('http://localhost:8080/carrinhos/finalizar-compra', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosPedido)
        })
        .then(async (response) => {
            if(response.ok){
                alert("Pagamento aprovado e compra finalizada com sucesso! 🎉");
                localStorage.removeItem('carrinhoEcommerce'); 
                window.location.href = '../inicio/inicio.html'; 
            } else {
                const erro = await response.text();
                alert(erro);
                
                btnConfirmar.textContent = "Confirmar Pagamento";
                btnConfirmar.disabled = false;
                btnConfirmar.style.opacity = '1';
            }
        })
        .catch(error => {
            console.error('Erro: ', error);
            alert("Erro de conexão com servidor.");
            
            btnConfirmar.textContent = "Confirmar Pagamento";
            btnConfirmar.disabled = false;
            btnConfirmar.style.opacity = '1';
        });
    });
});