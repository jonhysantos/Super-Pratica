import {dobro,somar, subtrair } from "./funcoes32.js"


function mostrarMenu(){
    const opcao = parseFloat(prompt(`Escolha uma operação:\n1.Ver o dobro de um número.\n2.Somar dois números.\n3.Subtrair dois números.\n4.Sair`))
    return parseFloat(opcao)
}

function calcularDobro(){
    const n = parseInt(prompt(`Digite uma número para ver o dobro:`))
    if(isNaN(n) ){
        alert('Número inválido')
        return
    }
    const resultado = dobro(n)
    alert(`O dobro de ${n} = ${resultado}.`)
}

function calcularDoisNumeros(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    if(isNaN(n) || isNaN(n2)){
        alert('Número inválido')
        return
    }

    const resultado = somar(n,n2)
    alert(`Somando ${n} + ${n2} = ${resultado}.`)
}

function subtrairDoisNumeros(){
    const n = parseInt(prompt('Digite o primeiro número;'))
    const n2 = parseInt(prompt('Digite o segundo núemro:'))
    if(isNaN(n) || isNaN(n2)){
        alert('Número inválido.')
        return
    }
    const resultado = subtrair(n,n2)
    alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
}

let escolha

do{
    escolha = mostrarMenu()
    switch(escolha){
        case 1:
            calcularDobro()
            break
        case 2:
            calcularDoisNumeros()
            break
        case 3:
            subtrairDoisNumeros()
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert('Opção inválida,tente novamente')
    }

}while(escolha !== 4)
