const randomN = Math.floor(Math.random() * 100) + 1

const maxTries = 10;
let tries = 0;

for(tries = 1; tries <= maxTries; tries ++){
    let guess = parseInt(prompt(`Tentativa ${tries}/${maxTries}.Adivinhe o núemro entre 1 e 100`))
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Apenas número entre 1 e 100')
        tries --
    }else if(guess === randomN){
        alert(`Parabens! você acertou o número ${randomN} em ${tries} tentativas`)
        break
    }else if(guess < randomN){
        alert('Tente um número maior')
    }else{
        alert('Tente um número menor')
    }
}

if(tries > maxTries){
    alert(`Suas ${maxTries} Tentativas/${maxTries} acabaram, o número era ${randomN}`)
}