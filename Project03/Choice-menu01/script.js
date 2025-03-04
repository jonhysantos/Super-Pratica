import { doble,sum,sub } from "./functions.js";

function showMenu(){
    const option = parseInt(prompt('Escolha uma opção:\n 1.Ver o dobro de um número.\n2.Somar dois números.\n3.Subtrair dois números.\n4.sai'))
    return parseInt(option)
}

function calcDoble(){
    const n = parseInt(prompt('Digite um número para ver seu dobro:'))
    if(isNaN(n)){
       alert('inválido')
    }else{
        const result = doble(n)
       alert(`O dobro de ${n} = ${result}`) 
    }
    
}

function calcSub(){
    const n = parseInt(prompt('digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    if(isNaN(n) || isNaN(n2)){
        alert('inválido')
    }else{
        const result = sub(n,n2)
        alert(`Somando ${n} - ${n2} = ${result}`)
    }
}

function calcSum(){
    const n = parseInt(prompt('digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    if(isNaN(n) || isNaN(n2)){
        alert('inválido')
    }else{
        const result = sum(n,n2)
        alert(`Subtraindo ${n} + ${n2} = ${result}`)
    }
}

let choice
while(choice !== 4){
     choice = showMenu()
    switch(choice){
        case 1:
            calcDoble();
            break
        case 2:
            calcSum();
            break
        case 3:
            calcSub();
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert('opção inválida')
    }
}

