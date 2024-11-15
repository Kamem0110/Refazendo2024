alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
/*
colocar um valor derivado
- usar o parseInt: ele vai mostar apenas o primeiro número do Math.random
- no Math.random, ele mosta de 0 a 1 (exemplo 0.254669789)
*/
let numeroSecreto  = parseInt(Math.random() * numeroMaximo + 1);
console.log (numeroSecreto);
let chute;
let tentativa = 1;


//while = enquanto, shute não for igual ao não ou sim
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //if = se chute for igual ao número secreto
    if (chute == numeroSecreto) { 
        break; //para o processo
        
    } else {
        //alert('Você foi muito burro!')
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        //numero de tentativa
        //tentativa = tentativa + 1;
        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);

/*if (tentativa > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativa.`);
}*/