import { doble,sum,sub } from "./functions.js";


function showMenu(){
    const option = parseInt(prompt('EScolha uma opção:\n 1.Ver o dobro de um numero:\n2.Somar dois numeros.\n3.Subtrair dois numeros.\n4.sair'))
    return parseInt(option)
}

function calcDoble(){
    const x = parseFloat(prompt('Digite um numero para ver seu dobro:'))
    if(isNaN(x)){
        alert('numero invalido')
        return
    }

    const result = doble(x)
    alert(`O dobro de ${x} = ${result}`)
}

function calcSum(){
    const x = parseFloat(prompt('Digite o primeiro numero:'))
    const y = parseFloat(prompt('diigte o segundo numero:'))
    if(isNaN(x) || isNaN(y)){
        alert('numero invalido')
        return
    }

    const result = sum(x,y)
    alert(`Somando  ${x} + ${y} = ${result}`)
}

function calcSub(){
    const x = parseFloat(prompt('Digite o primeiro numero:'))
    const y = parseFloat(prompt('diigte o segundo numero:'))
    if(isNaN(x) || isNaN(y)){
        alert('numero invalido')
        return
    }

    const result = sub(x,y)
    alert(`Subtraindo  ${x} - ${y} = ${result}`)
}

let choice

do{
     choice = showMenu();
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
            alert('Opção invalida')
    }

}while(choice !== 4)