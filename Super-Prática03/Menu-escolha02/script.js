import { dobble,sum,sub } from "./functions.js";

function showMenu(){
    const option = parseFloat(prompt('Escolha uma opção:\n1.Ver o dobro de um número.\n2.Somar dois numeros.\n3.Subtrair dois numeros.\n4.sair'))
    return parseFloat(option)
}

function calcDobble(){
    const n = parseFloat(prompt('Digite um número para ver seu dobro:'))
    if(isNaN(n)){
        alert('Não é um numero')
    }else{
        const resutl = dobble(n)
        alert(`O dobro de ${n} = ${resutl}`)
    }
}

function calcSum(){
    const n = parseFloat(prompt('Digite o primeiro numero:'))
    const n2 = parseFloat(prompt('Digite o segundo número:'))
    if(isNaN(n,n2)){
        alert(`Não é um número valido`)
    }else{
        const result = sum(n,n2)
        alert(`Somando ${n} + ${n2} = ${result}`)
    }
}

function calcSub(){
    const n = parseFloat(prompt('Digite o primeiro numero:'))
    const n2 = parseFloat(prompt('Digite o segundo número:'))
    if(isNaN(n,n2)){
        alert(`Não é um número valido`)
    }else{
        const result = sub(n,n2)
        alert(`Subtraindo ${n} - ${n2} = ${result}`)
    }
}

let choice 

do{
    choice = showMenu()
    switch(choice){
        case 1:
            calcDobble()
            break
        case 2:
            calcSum()
            break
        case 3:
            calcSub()
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert('Opção inválida')
    }

}while(choice !== 4)