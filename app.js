let = listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você ganhou');
        let texto = tentativas > 1 ? `Você acertou em ${tentativas} tentativas!`: 'De primeira!'
        exibirTextoNaTela('p', texto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`)
    }
    else {
        exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`)
    }
    tentativas++;
    limparCampo();
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', "Jogo numero");
    exibirTextoNaTela('p', 'Escolha numero entre 1 e 100');
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}

