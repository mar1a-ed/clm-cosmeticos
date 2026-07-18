document.addEventListener('DOMContentLoaded', function() {
    const usuarioString = localStorage.getItem('userLogado');

    if (!usuarioString) {
        alert('Você precisa fazer login para acessar esta página.');
        window.location.href = '../login/login-cadastro.html';
        return; 
    }

    const usuario = JSON.parse(usuarioString);

    document.getElementById('nome').value = usuario.nome;
    document.getElementById('sobrenome').value = usuario.sobrenome;
    document.getElementById('email').value = usuario.email;
    document.getElementById('telefone').value = usuario.telefone || "";
    document.getElementById('dataNascimento').value = usuario.dataNascimento || "";
    document.getElementById('cpf').value = usuario.cpf || "";
    document.getElementById('endereco').value = usuario.endereco || "";

    if(usuario.genero){
        const radioBtnGenero = document.querySelector(`input[name="genero"][value="${usuario.genero}"]`);
        if(radioBtnGenero){
            radioBtnGenero.checked = true;
        }
    }
});

async function updateDadosUsuario(event){
    if(event){
        event.preventDefault();
    }

    const userLogado = JSON.parse(localStorage.getItem('userLogado'));

    const generoSelected = document.querySelector('input[name="genero"]:checked');

    const dadosAtualizadosUsuario = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        telefone: document.getElementById('telefone').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        cpf: document.getElementById('cpf').value,
        endereco: document.getElementById('endereco').value,
        genero: generoSelected ? generoSelected.value : null
    };

    try{
        const response = await fetch(`http://localhost:8080/usuarios/atualizar-dados/${userLogado.email}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dadosAtualizadosUsuario)
        });

        if(response.ok){
            const userNovo = await response.json();

            localStorage.setItem('userLogado', JSON.stringify(userNovo));

            alert("Perfil atualizado com sucesso!");
        }else{
            const erro = await response.text();
            alert("Erro: " + erro);
        }
    }catch(error){
        console.log("Erro na requisição: ", error);
        alert("Erro de conexão com servidor.");
    }

}

function fazerLogout() {
    localStorage.removeItem('userLogado');
    
    window.location.href = '../login/login-cadastro.html';
}

