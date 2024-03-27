var naoButton = document.getElementById('nao');
var naoCounter = 0;
var frasesNao = ["Tem certeza?", "Por que não?", "Por que você está hesitando?", "Tente reconsiderar", "Você pode mudar de ideia"];

function aumentarNao() {
    var tamanhoAtual = window.getComputedStyle(naoButton).getPropertyValue('font-size');
    var novoTamanho = parseFloat(tamanhoAtual) * 1.1; // Aumenta em 10%
    naoButton.style.fontSize = novoTamanho + 'px';
}

function rejeitar() {
    alert(frasesNao[naoCounter % frasesNao.length]);
    naoCounter++;
}

function aceitar() {
    alert("Ai, obrigado, minha princesa, amo você! <3 (clica no ok)");
    window.location.href = 'https://youtu.be/o_1aF54DO60?si=IQtBDPLaARhrwE45&t=165';
}
