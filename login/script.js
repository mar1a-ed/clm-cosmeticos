function trocarAba(abaNome){
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.form-section').forEach(form => form.classList.remove('active'));

    if(abaNome == 'login'){
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('form-login').classList.add('active');
    }else{
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('form-cadastro').classList.add('active');
    }
}

document.getElementById('form-login-element').addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.getElementById('login-email').value;
    let nomeUser = email.split('@')[0];

    localStorage.setItem('usuarioLogado', nomeUser);

    window.location.href = '../inicio/inicio.html';
});

document.getElementById('form-cadastro-element').addEventListener('submit', function(event){
    event.preventDefault();

    let nome = document.getElementById('cad-nome').value;

    localStorage.setItem('usuarioLogado', nome);

    window.location.href = '../inicio/inicio.html';
});