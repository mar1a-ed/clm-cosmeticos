const URL_API_PRODUTOS = "http://localhost:8080/produtos/produtos.html";
 
const listaProdutosEl = document.getElementById("lista-produtos");
const statusMsgEl = document.getElementById("status-msg");
 
async function carregarProdutos() {
  try {
    const resposta = await fetch(URL_API_PRODUTOS);

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status} - ${resposta.statusText}`);
    }
 
    const listaDeJsonsTexto = await resposta.json();
 
    const produtos = listaDeJsonsTexto.map(function (jsonTexto) {
      return JSON.parse(jsonTexto);
    });
 
    exibirProdutos(produtos);
 
  } catch (erro) {
    console.error("Falha ao carregar produtos:", erro);
    statusMsgEl.textContent = "Não foi possível carregar os produtos. Tente novamente mais tarde.";
    statusMsgEl.classList.add("erro");
  }
}

function exibirProdutos(produtos) {
  statusMsgEl.remove();
 
  if (!produtos || produtos.length === 0) {
    listaProdutosEl.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }
 
  produtos.forEach(function (produto) {
    const card = document.createElement("div");
    card.classList.add("card-produto");
    card.dataset.categoria = produto.categoria ?? "";
    card.dataset.nome = (produto.nome ?? "").toLowerCase();
 
    const semEstoque = !produto.estoque || produto.estoque <= 0;
 
    card.innerHTML = `
      <button class="btn-favorito" type="button" aria-label="Favoritar produto">
        ♡
      </button>
 
      <img class="imagem-produto" src="${produto.imagem ?? ""}" alt="${produto.nome ?? "Produto"}"
           onerror="this.src='https://via.placeholder.com/220x160?text=Sem+imagem'">
 
      <div class="tags">
        <span class="tag">${produto.categoria ?? ""}</span>
        <span class="tag">${produto.tipoProduto ?? ""}</span>
      </div>
 
      <h2>${produto.nome ?? "Produto sem nome"}</h2>
      <p class="descricao">${produto.descricao ?? ""}</p>
 
      <p class="preco">R$ ${Number(produto.preco ?? 0).toFixed(2)}</p>
      <p class="estoque ${semEstoque ? "esgotado" : ""}">
        ${semEstoque ? "Sem estoque" : produto.estoque + " em estoque"}
      </p>
 
      <button class="btn-carrinho" type="button" ${semEstoque ? "disabled" : ""}>
        Adicionar ao carrinho
      </button>
    `;
 
    //Botão de adicionar favorito
    const btnFavorito = card.querySelector(".btn-favorito");
    
    btnFavorito.addEventListener("click", function(){
      const userLogado = JSON.parse(localStorage.getItem('userLogado'));

      if(!userLogado){
        alert("Você precisa estar logado para favoritar produtos!");
        return;
      }

      const dadosFavorito = {
        userEmail: userLogado.email,
        produtoId: produto.id
      };

      fetch('http://localhost:8080/favoritos/alternar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosFavorito)
      })
      .then(async(response) =>{
        if(response.ok){
          const msg = await response.text();

          const prodFavorito = btnFavorito.classList.toggle("ativo");
          btnFavorito.textContent = prodFavorito ? "♥" : "♡";

          console.log(msg);
        }
      })
      .catch(error => console.error("Erro na requisição: ", error));
    });
    
    //Botão de adicionar ao carrinho   
    const btnCarrinho = card.querySelector(".btn-carrinho");
    
    btnCarrinho.addEventListener("click", function(){
      
      let carrinho = JSON.parse(localStorage.getItem('carrinhoEcommerce')) || [];

      let produtoExistente = carrinho.find(item => item.id === produto.id);

      if(produtoExistente){
          produtoExistente.quantidade += 1;
      }else{
          carrinho.push({
              id: produto.id,
              nome: produto.nome,
              preco: produto.preco,
              imagem: produto.imagem ?? 'https://via.placeholder.com/220x160?text=Sem+imagem',
              quantidade: 1
          });
      }

      localStorage.setItem('carrinhoEcommerce', JSON.stringify(carrinho));

      const textoOriginal = btnCarrinho.textContent;
      btnCarrinho.textContent = "Adicionado!";
      btnCarrinho.classList.add("confirmado");

      setTimeout(function(){
        btnCarrinho.textContent = textoOriginal;
        btnCarrinho.classList.remove("confirmado");
      }, 1200);
    });

    listaProdutosEl.appendChild(card);
  });
}

const botoesFiltro = document.querySelectorAll(".filter-pills .btn-pill");
const inputBusca = document.getElementById("searchInput");
 
let categoriaAtual = "TODOS";
let textoBuscaAtual = "";

function aplicarFiltros() {
  const cards = listaProdutosEl.querySelectorAll(".card-produto");
 
  cards.forEach(function (card) {
    const bateCategoria =
      categoriaAtual === "TODOS" || card.dataset.categoria === categoriaAtual;
 
    const bateBusca =
      textoBuscaAtual === "" || card.dataset.nome.includes(textoBuscaAtual);
 
    card.style.display = bateCategoria && bateBusca ? "" : "none";
  });
}
 
botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {
    categoriaAtual = botao.dataset.categoria;
 
    botoesFiltro.forEach(function (b) {
      b.classList.remove("active");
    });
    botao.classList.add("active");
 
    aplicarFiltros();
  });
});
 
inputBusca.addEventListener("input", function () {
  textoBuscaAtual = inputBusca.value.trim().toLowerCase();
  aplicarFiltros();
});

const menuToggle = document.getElementById("menuToggle");
const menubar = document.getElementById("menubar");
 
if (menuToggle && menubar) {
  menuToggle.addEventListener("click", function () {
    const aberto = menubar.classList.toggle("aberto");
    menuToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
    menuToggle.innerHTML = aberto
      ? '<i class="bi bi-x-lg"></i>'
      : '<i class="bi bi-list"></i>';
  });
 
  menubar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menubar.classList.remove("aberto");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="bi bi-list"></i>';
    });
  });
}
 
carregarProdutos();
