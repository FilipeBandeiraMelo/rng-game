let = listaNumerosSorteados = [];
let = numeroLimite = 10;
let numeroSecreto = rng();
let tentativa = 1;

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial (){
    exibirTexto("h1","JOGO DO NÚMERO SECRETO");
    exibirTexto("p","Digite um número de 1 à 10");
 }

 exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value
    if(chute==numeroSecreto){
        exibirTexto("h1", "Acertô mizeravi");
        palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTexto("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTexto("h1","Errou, tente novamente");
            exibirTexto("p","O número secreto é menor que o escolhido");
        }else{
            exibirTexto("h1","Errou, tente novamente");
            exibirTexto("p","O número secreto é maior que o escolhido");
        }
        if(chute > 10){
            exibirTexto("h1","Número Incorreto");
            exibirTexto("p","Apenas de 1 à 10 por gentileza")
        }
        tentativa++;
        limparCampo();
    }
}

function rng() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];

    }
    if(listaNumerosSorteados.includes(numeroEscolhido)) {
        return rng();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo(){
    numeroSecreto = rng();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

