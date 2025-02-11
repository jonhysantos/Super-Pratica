import { dobble,sum,sub } from "./functions.js"

function showMenu(){
    let option = parseFloat(prompt('Escolha uma operação:\n1.Ver o dobro de um número.\n2.Somar dois números.\n3.Subtrair dois números.\n4.Sair'))
    return parseFloat(option)
}


function calcDobble(){
    const n = parseFloat(prompt('Digite um número para ver o seu dobro'))
    if(isNaN(n)){
        alert('Digite um número:')
        return
    }
    const result = dobble(n)
    alert(`O dobro de ${n} = ${result}`)
}

function calcSum(){
    const n = parseFloat(prompt('Digite o primeiro número: '))
    const n2 = parseFloat(prompt('Digite o segundo número'))
    if(isNaN(n) || isNaN(n2)){
        alert('Apenas números!')
        return
    }
    const result = sum(n,n2)
    alert(`Somando ${n} + ${n2} = ${result}`)
}

function calcSub(){
    const n = parseFloat(prompt('Digite o primeiro número: '))
    const n2 = parseFloat(prompt('Digite o segundo número'))
    if(isNaN(n) || isNaN(n2)){
        alert('Apenas números!')
        return
    }
    const result = sub(n,n2)
    alert(`Somando ${n} - ${n2} = ${result}`)
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
            alert('Opção inválida,tente novamente')
    }

}while(choice !== 4)

