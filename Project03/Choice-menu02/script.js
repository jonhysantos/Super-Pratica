import { doble,sum,sub } from "./functions.js";


function showMenu(){
    let option = parseInt(prompt('Escolha uma opção:\n1.Ver o dobro de um número.\n2.Somar dois números.\n3.Subtrair dois numeros.\n4.Sair'))
    return parseInt(option)
}

function calcDoble(){
    const n = parseFloat(prompt('Digite um número:'))
    if(isNaN(n)){
        alert('Não é um numero')
    }else{
        const result = doble(n)
        alert(`O dobro de ${n} = ${result}`)
    }
}

function calcSub(){
    const n = parseFloat(prompt('Digite o primeiro numero:'))
    const n2 = parseFloat(prompt('Digite o segundo numero:'))

    if(isNaN(n) || isNaN(n2)){
        alert('Não é um numero')
    }else{
        const result = sub(n,n2)
        alert(`Subtraindo ${n} - ${n2} = ${result}`)
    }
}

function calcSum(){
    const n = parseFloat(prompt('Digite o primeiro numero:'))
    const n2 = parseFloat(prompt('Digite o segundo numero:'))

    if(isNaN(n) || isNaN(n2)){
        alert('Não é um numero')
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
            calcDoble();
            break
        case 2:
            calcSub()
            break
        case 3:
            calcSum()
            break
        case 4:
            alert('Saindo...');
            break
        default:
            alert('opção inválida')
    }

}while(choice !== 4)