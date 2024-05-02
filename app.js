let listaDeNumeros = [];
let numerosecreto = parseInt(Math.random() * 10 + 1);
let tentativas = 1;

function exibirtextonatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirtextonatela('h1', 'Jogo do número secreto');
    exibirtextonatela('p', 'Escolha um número entre 1 a 10');
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (numerosecreto == chute) {
        exibirtextonatela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirtextonatela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numerosecreto) {
            exibirtextonatela('p', 'O número secreto é menor');
        } else {
            exibirtextonatela('p', 'O número secreto é maior');
        }
        tentativas++
        console.log(`${tentativas}`);
        limparCampo();
    }
}

function gerarnumeroaleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeElementosNaLista = listaDeNumeros.length;

    if (quantidadeElementosNaLista == 10) {
        listaDeNumeros = []
    }

    if (listaDeNumeros.includes(numeroEscolhido)) {
        return gerarnumeroaleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function reiniciarJogo() {
    numerosecreto = gerarnumeroaleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}