let indexAtual = 0;
let totalImgs = 0;

function moverCarrossel(direcaoSeta){
    const track = document.getElementById("track");
    const imgs = track.querySelectorAll("img");
    totalImgs = imgs.length;

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
    const userString = localStorage.getItem('userLogado');

    if(userString){
        const usuario = JSON.parse(userString);

        const primeiroNome = usuario.nome.split(' ')[0];

        const linkLogin = document.getElementById('link-login');

        if(linkLogin){
            linkLogin.textContent = `Olá, ${primeiroNome}`;
            linkLogin.href = '../perfil/perfil.html';
        }
    }
});

