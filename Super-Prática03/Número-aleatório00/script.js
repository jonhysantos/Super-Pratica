const numRandom = Math.floor(Math.random() * 100) + 1

const maxTries = 10;
let tries = 0;

for(tries = 1;tries <= 10;tries ++ ){
    let guess = parseFloat(prompt(`Tentativas ${tries} / ${maxTries}.Adivinhe o número entre 1 e 100`))
    if(isNaN(guess) || guess > 100 || guess < 1){
        alert('Por favor apenas números de 1 a 100')
        tries --
    }else if(guess === numRandom){
        alert(`Parabéns! vocẽ acertou o número ${numRandom} em ${tries}`)
    }else if(guess > numRandom){
        alert('Tente um número menor')
    }else {
        alert('Tente um número maior')
    }
}

if(tries >= maxTries){
    alert(`Suas ${tries} Tentativas / ${maxTries} acabaram, o número era ${numRandom} `)
}