const URL_API_PRODUTOS = "http://localhost:8080/produtos/produtos.html";

// Descobre em qual página estamos
const PAGINA = document.body.dataset.pagina;
 
// Pega as referências dos elementos HTML que vamos manipular
const listaProdutosEl = document.getElementById("lista-produtos");
const statusMsgEl = document.getElementById("status-msg");
 
// Função principal: busca os produtos no backend
async function carregarProdutos() {
  try {
    // 1) fetch() faz a requisição HTTP (GET por padrão) para a URL informada. Ela retorna uma Promise, por isso usamos "await": o código "pausa" aqui até a resposta chegar, sem travar a página.
    const resposta = await fetch(URL_API_PRODUTOS);
 
    // 2) Nem toda resposta HTTP é "sucesso" (200 OK). Erros como 404 ou 500. NÃO lançam exceção automaticamente no fetch - precisamos checar manualmente.
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status} - ${resposta.statusText}`);
    }
 
    // 3) resposta.json() converte o corpo da resposta (texto) em um objeto/array JavaScript. Como você disse que o backend envia uma LISTA DE STRINGS (cada string sendo um JSON de produto)
    // o resultado aqui será um array de strings, por exemplo:["{\"nome\":\"Produto A\",\"preco\":10.0}", "{\"nome\":\"Produto B\",...}"]
    const listaDeJsonsTexto = await resposta.json();
 
    // 4) Como cada item da lista é uma STRING contendo um JSON (e não um objeto JSON direto), precisamos fazer um segundo parse, item por item, para transformar cada string em um objeto JavaScript de produto.
    const produtos = listaDeJsonsTexto.map(function (jsonTexto) {
      return JSON.parse(jsonTexto);
    });
 
    // 5) Com os produtos já como objetos JS, exibimos na tela
    exibirProdutos(produtos);
 
  } catch (erro) {
    // Cai aqui se: a rede falhar, o backend estiver fora do ar, der erro de CORS, ou o JSON vier mal formatado.
    console.error("Falha ao carregar produtos:", erro);
    statusMsgEl.textContent = "Não foi possível carregar os produtos. Tente novamente mais tarde.";
    statusMsgEl.classList.add("erro");
  }
}
 
// Monta o HTML de cada produto e insere na página
function exibirProdutos(produtos) {
  // Remove a mensagem "Carregando..."
  statusMsgEl.remove();

  if (!produtos || produtos.length === 0) {
    listaProdutosEl.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }

  // Para cada produto, cria um "card" e adiciona na div #lista-produtos.
  produtos.forEach(function (produto) {
    // Filtra conforme a página
    // Página Produtos: não mostra acessórios nem kits
    if (PAGINA === "produtos" &&(produto.categoria === "ACESSORIOS_DE_BELEZA" ||produto.categoria === "KITS_E_PRESENTES")) 
      return;

    // Página Acessórios: mostra apenas acessórios
    if (PAGINA === "acessorios" &&produto.categoria !== "ACESSORIOS_DE_BELEZA") 
      return;

    // Página Kits: mostra apenas kits
    if (PAGINA === "kits" && produto.categoria !== "KITS_E_PRESENTES") 
      return;
    

    const card = document.createElement("div");
    card.classList.add("card-produto");

    // Guarda a categoria e o nome para os filtros
    card.dataset.categoria = produto.categoria ?? "";
    card.dataset.tipo = produto.tipoProduto ?? "";
    card.dataset.nome = (produto.nome ?? "").toLowerCase();

    // Estoque esgotado desabilita o botão de carrinho
    const semEstoque = !produto.estoque || produto.estoque <= 0;

    card.innerHTML = `
      <button class="btn-favorito" type="button" aria-label="Favoritar produto">
        ♡
      </button>

      <img class="imagem-produto"
           src="${produto.imagem ?? ""}"
           alt="${produto.nome ?? "Produto"}"
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

    // Botão Favorito
    const btnFavorito = card.querySelector(".btn-favorito");

    btnFavorito.addEventListener("click", function () {
      const favoritado = btnFavorito.classList.toggle("ativo");
      btnFavorito.textContent = favoritado ? "♥" : "♡";
    });

    // Botão Carrinho
    const btnCarrinho = card.querySelector(".btn-carrinho");

    btnCarrinho.addEventListener("click", function () {
      const textoOriginal = btnCarrinho.textContent;

      btnCarrinho.textContent = "Adicionado!";
      btnCarrinho.classList.add("confirmado");

      setTimeout(function () {
        btnCarrinho.textContent = textoOriginal;
        btnCarrinho.classList.remove("confirmado");
      }, 1200);
    });

    listaProdutosEl.appendChild(card);
  });
}
 

// Filtros: categoria + pesquisa por nome (independentes, mas combinados sempre que QUALQUER um dos dois muda)
const botoesFiltro = document.querySelectorAll(".filter-pills .btn-pill");
const inputBusca = document.getElementById("searchInput");
 
// Guarda o estado atual dos dois filtros. Começam "vazios" (sem restrição).
let categoriaAtual = "TODOS";
let tipoAtual = "";
let textoBuscaAtual = "";
 
// Função central: relê o estado atual dos dois filtros e decide,para CADA card, se ele deve aparecer ou não.
function aplicarFiltros() {
    const cards = listaProdutosEl.querySelectorAll(".card-produto");
    cards.forEach(function(card){
        const bateCategoria =
            categoriaAtual === "TODOS" ||
            card.dataset.categoria === categoriaAtual;

        let bateTipo = false;
        if (tipoAtual === "") {
            bateTipo = true;
        } else if (tipoAtual === "OUTROS_ACESSORIOS") {
            bateTipo =
                card.dataset.tipo === "ESPONJA_DE_MAQUIAGEM" ||
                card.dataset.tipo === "OUTROS_ACESSORIOS";
        } else {
            bateTipo = card.dataset.tipo === tipoAtual;
        }
        const bateBusca = textoBuscaAtual === "" || card.dataset.nome.includes(textoBuscaAtual);
        card.style.display = bateCategoria && bateTipo && bateBusca ? "" : "none";
    });
}

 
// --- Clique nas pílulas de categoria ---
botoesFiltro.forEach(function(botao){
    botao.addEventListener("click",function(){
        botoesFiltro.forEach(function(b){
            b.classList.remove("active");
        });
        botao.classList.add("active");

        if(botao.dataset.categoria){
            categoriaAtual = botao.dataset.categoria;
            tipoAtual = "";
        }else if(botao.dataset.tipo){
            categoriaAtual = "TODOS";
            tipoAtual = botao.dataset.tipo;
        }

        aplicarFiltros();
    });
});

// --- Digitação no campo de busca ---
// "input" dispara a cada tecla digitada (diferente de "change", que só dispara quando o campo perde o foco).
inputBusca.addEventListener("input", function () {
  textoBuscaAtual = inputBusca.value.trim().toLowerCase();
  aplicarFiltros();
});


// Menu hambúrguer (navbar responsiva) Em telas pequenas, o CSS escode ".menubar" e mostra o botão ".menu-toggle". Aqui só controlamos a classe "aberto", que o CSS usa pra exibir o menubar como painel sobre a página (overlay).
const menuToggle = document.getElementById("menuToggle");
const menubar = document.getElementById("menubar");
 
if (menuToggle && menubar) {
  menuToggle.addEventListener("click", function () {
    const aberto = menubar.classList.toggle("aberto");
    // Atualiza o atributo de acessibilidade e troca o ícone (lista <-> X)
    menuToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
    menuToggle.innerHTML = aberto
      ? '<i class="bi bi-x-lg"></i>'
      : '<i class="bi bi-list"></i>';
  });
 
  // Fecha o menu automaticamente ao clicar em qualquer link dele, já que o usuário está navegando para outra página.
  menubar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menubar.classList.remove("aberto");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="bi bi-list"></i>';
    });
  });
}
 
// Dispara a busca dos produtos assim que o script é carregado
carregarProdutos();