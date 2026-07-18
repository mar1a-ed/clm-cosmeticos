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

/*Banco de Dados*/
//formulario para login

const formCadastro = document.getElementById('form-cadastro-element');

formCadastro.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('cad-nome').value;
    const email = document.getElementById('cad-email').value;
    const senha = document.getElementById('cad-senha').value;

    const dadosUsuario = {nome: nome, email: email, senha: senha};

    fetch('http://localhost:8080/usuarios/cadastrar', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(dadosUsuario)
    })
    .then(response =>{
        if(response.ok){
            alert('Cadastro realizado com sucesso!');
            formCadastro.reset();
            trocarAba('login');
        }else{
            alert('Erro. Não foi possível cadastrar usuário. Tente novamente mais tarde.');
        }
    })
    .catch(error => {
        console.error('Erro na requisição.', error);
        alert('Erro na conexão do servidor');
    })
});

const formLogin = document.getElementById('form-login-element');

formLogin.addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    const dadosLogin = {email: email, senha: senha};

    fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosLogin)
    })
    .then(async(response) =>{
        if(response.ok){
            const userLogado = await response.json();
            localStorage.setItem('userLogado', JSON.stringify(userLogado));

            alert('Login realizado com sucesso');
            window.location.href = '../inicio/inicio.html';
        }else{
            const errorMessage = await response.text();
            alert(errorMessage);
        }
    })
    .catch(error => {
        console.error('Erro na requisição.', error);
        alert('Erro na conexão do servidor');
    });
});