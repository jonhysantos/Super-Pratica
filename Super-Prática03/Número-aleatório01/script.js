const numrandom = Math.floor(Math.random() *100 ) + 1

let tries = 0;
const maxTries = 10;

for(tries = 1; tries <= 10; tries ++){
    let guess = parseFloat(prompt(`Tentativa ${tries} / ${maxTries}.Adivinhe o número entre 1 e 100`))
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Numero inválido')
        tries --
    }else if(guess === numrandom){
        alert(`Parabéns! Você acertou o número ${numrandom} em ${tries} tentativas`)
        break
    }else if(guess > numrandom){
        alert('Tente um numero menor')
    }else{
        alert('Tente um número maior')
    }
}

if(tries > maxTries){
    alert(`Suas ${tries} tentativas / ${maxTries} acabaram, o número era ${guess}, tente novamente.`)
}