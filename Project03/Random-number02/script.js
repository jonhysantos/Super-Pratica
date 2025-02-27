const random = Math.floor(Math.random() * 100) + 1


const maxTries = 10;
let tries = 0;

for(tries = 1; tries <= maxTries; tries ++){
    let guess = parseInt(prompt(`Tentativa ${tries} / ${maxTries}.Adivinhe o número entre 1 e 100`))
    if(isNaN(guess) || guess < 0 || guess > 100){
        alert(`Número fora do desejado`)
        tries --
    }else if(guess === random){
        alert(`Parabens! você acertou o número ${random} em ${tries} tentativas`)
        break
    }else if(guess < random){
        alert('Tente um numero maior')
    }else{
        alert('Tente um numero menor')
    }
}

if(tries > maxTries){
    alert(`Suas ${maxTries} / ${maxTries} acabaram, o número era ${random}.`)
}