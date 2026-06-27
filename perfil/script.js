document.addEventListener('DOMContentLoaded', function(){
    const usuarioLogado = localStorage.getItem('usuarioLogado');    
    const nomeInput = document.getElementById('nome');

    if(usuarioLogado && nomeInput && emailInput){
        nomeInput.value = usuarioLogado.charAt(0).toUpperCase() + usuarioLogado.slice(1);
    }
});