import { dobro,somar,subtrair } from "./funcoes26.js";

function mostrarMenu(){
    let opcao = parseFloat(prompt('Escolha um operação:\n1.Ver o dobro de um número.\n2.Somar dois números.\n4.Sair.'))
    return parseFloat(opcao)
}

function verDobro(){
    const n = parseInt(prompt('Digite um número para ver o seu dobro:'))
    const resultado = dobro(n)
    alert(`O dobro de ${n} = ${resultado}.`)
}

function somarDoisNumeros(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    const resultado = somar(n,n2)
    alert(`Somando ${n} + ${n2} = ${resultado}.`)
}

function subtrairDoisNumeros(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    const resultado = subtrair(n,n2)
    alert(`Subtraindo ${n} - ${n2} = ${resultado}.`)
}

let escolha 
do{
    escolha = mostrarMenu()
    switch(escolha){
        case 1:
            verDobro()
            break
        case 2:
            somarDoisNumeros()
            break
        case 3:
            subtrairDoisNumeros()
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert('Opção inválida,tente novamente.')
    }

}while(escolha !== 4)

