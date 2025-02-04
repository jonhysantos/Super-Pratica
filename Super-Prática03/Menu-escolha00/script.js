import { doble,sum,sub } from "./functions.js";

function showMenu(){
    let option = parseFloat(prompt('Escolha uma opção:\n1.Ver o dobro de um número.\n.2.Ver a soma de dois números.\n3.Subtrair dois números.\n4.Sair'))
    return parseFloat(option)
}

function calcDoble(){
    const n = parseFloat(prompt('Digite um número para ver seu dobro'));
    if(isNaN(n)){
        alert('Digite um número')
    }else{
        const result = doble(n)
        alert(`O dobro de ${n} = ${result}`)
    }
}

function calcSum(){
    const n = parseFloat(prompt('Digite o primeiro Número:'));
    const n2 = parseFloat(prompt('Digite o segundo número:'));
    if(isNaN(n) || isNaN(n2)){
        alert('Não é um número')
    }else{
        const result = sum(n,n2)
        alert(`Somando ${n} - ${n2} = ${result} `)
    }
}

function calcSub(){
    const n = parseFloat(prompt('Digite o primeiro Número:'));
    const n2 = parseFloat(prompt('Digite o segundo número:'));
    if(isNaN(n) || isNaN(n2)){
        alert('Não é um número')
    }else{
        const result = sub(n,n2)
        alert(`Somando ${n} + ${n2} = ${result} `)
    }
}

let choice 

do{
    choice = showMenu()
    switch(choice){
        case 1:
            calcDoble()
            break
        case 2:
            calcSum()
            break
        case 3:
            calcSub()
            break
        case 4:
            alert('SAindo...')
            break
        default:
            alert('Opção inválida,tente novamente')
    }

}while(choice !== 4)