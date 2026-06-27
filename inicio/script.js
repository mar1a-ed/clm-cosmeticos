let indexAtual = 0;

function moverImgsCarrossel(direcaoSeta){
    const track = document.getElementById("track");
    const imgs = track.querySelectorAll("img");
    const totalImgs = imgs.length;

    indexAtual += direcaoSeta;

    if(indexAtual<0){
        indexAtual = totalImgs - 1;
    }else if(indexAtual>=totalImgs){
        indexAtual = 0;
    }

    const mover = -indexAtual * 100;
    track.style.transform = `translateX(${mover}%)`;

}

document.addEventListener('DOMContentLoaded', function(){
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    const dropdownMenu = document.getElementById('dropdown-menu-perfil');

    if(usuarioLogado && dropdownMenu){   
        const nomeGenerico = usuarioLogado.charAt(0).toUpperCase() + usuarioLogado.slice(1);

        dropdownMenu.innerHTML = `
            <div class="dropdown-header" style="font-size: 16px">Olá, <b style="color: #dea8b1;">${nomeGenerico}</b>!</div>
            <a href="../perfil/perfil.html" style="color: #555; text-decoration: none; display: block; padding: 8px 0; font-weight: 500;">Meu Perfil</a>
            <a href="../pedidos/meusPedidos.html" style="color: #555; text-decoration: none; display: block; padding: 8px 0; font-weight: 500;">Meus Pedidos</a>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0 10px 0;">
            <a href="#" id="btn-sair" style="color: #e5989b; text-decoration: none; display: block; padding: 5px 0; font-weight: bold;">Sair</a>
        `;

        document.getElementById('btn-sair').addEventListener('click', function(e){
            e.preventDefault();

            localStorage.removeItem('usuarioLogado');
            window.location.reload();
        });
    }
});