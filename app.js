

let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto)
let chute;
let tentativa = 1; 

while (chute != numeroSecreto){
    chute = prompt("escolha um número entre 1 e 10");
        if (chute == numeroSecreto){
            break;
         } else if (chute > numeroSecreto){
                alert("o número secreto é MENOR que este");
            } else {
                    alert("o número secreto é MAIOR que este")
                }
                tentativa++;


}

let = palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
alert(`Acertou com ${tentativa} ${palavraTentativa}` );

