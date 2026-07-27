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

const formContato = document.getElementById('contact-form');

formContato.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const dadosContato = {
        Nome: nome,
        Email: email,
        Assunto: assunto,
        Mensagem: mensagem
    };

    const urlFormspree = 'https://formspree.io/f/mjgnjrdb';

    fetch(urlFormspree, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(dadosContato)
    })
    .then(response =>{
        if(response.ok){
            alert("A CLM-Cosmetics agradece o contato. Mensagem enviada com sucesso! Retornaremos em breve no seu e-mail.");
            formContato.reset();
        }else{
            alert("Erro ao enviar a mensagem. Verifique os dados e tente novamente.");
        }
    })
    .catch(error =>{
        console.error("Erro: ", error);
        alert("Erro de conexão com servidor. Tente novamente mais tarde.");
    })

});