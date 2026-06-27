function alterarQtd(idqtd, qtd){
    let qtdId = document.getElementById(idqtd);
    let qtdAtual = parseInt(qtdId.innerText);

    let qtdNova = qtdAtual + qtd;

    if(qtdNova >= 1){
        qtdId.innerText = qtdNova;
    }
}