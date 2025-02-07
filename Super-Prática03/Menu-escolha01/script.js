import { doble,sub,sum } from "./function.js";


function showMenu(){
    let option = parseFloat(prompt(`Escolha uma opção:\n1.Ver o dobro de um número.\n2Somar dois números.\n3.Subtrair dois números.\n4.Sair`))
    return parseFloat(option)
}

function calcDoble(){
    const n = parseFloat(prompt(`Digite um número:`))
    if(isNaN(n)){
        alert('Numero invalido')
    }else{
        const result = doble(n)
        alert(`O dobro de ${n} = ${result}`)
    }
}

function calcSub(){
    const n = parseFloat(prompt('Digite o primeiro número:'))
    const n2 = parseFloat(prompt('Digite o segundo número:'))
    if(isNaN(n) || isNaN(n2)){
        alert('numero invalido')
    }else{
        const result = sub(n,n2)
        alert(`Subtraindo ${n} - ${n2} = ${result}`)
    }
}

function calcSum(){
    const n = parseFloat(prompt('Digite o primeiro número:'))
    const n2 = parseFloat(prompt('Digite o segundo número:'))
    if(isNaN(n) || isNaN(n2)){
        alert('numero invalido')
    }else{
        const result = sum(n,n2)
        alert(`Subtraindo ${n} + ${n2} = ${result}`)
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
            calcSub()
            break
        case 3:
            calcSum()
            break
        case 4:
            alert('Saindo')
            break
        default:
            alert('Opção inválida,tente novamente')
    }

}while(choice !== 4)