const randomNumber = Math.floor(Math.random() * 100) * 1
console.log(randomNumber)

const maxTries = 10;
let tries = 0;

for(tries = 1; tries <= maxTries; tries ++){
    const guess = parseInt(prompt(`Tentativa ${tries} / ${maxTries}. Adivinhe o numero entre 1 e 100.`))
    if(isNaN(guess) || guess < 1 || guess > 100){
        tries --
        alert('numero invalido')
    }else if(guess === randomNumber){
        alert(`Parabens! você acertou o numero ${randomNumber} em ${tries} tentativas`)
        break
    }else if(guess < randomNumber){
        alert('Tente um numero maior')
    }else{
        alert('tente um numero menor')
    }
}

if(tries > maxTries){
    alert(`Suas ${maxTries} / ${maxTries} acabaram o numero era ${randomNumber}`)
}