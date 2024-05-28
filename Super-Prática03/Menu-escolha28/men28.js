import { dobro,somar,subtrair } from "./funcoes28.js";

function mostrarMenu(){
    let opcao = parseFloat(prompt('Escolha uma operação:\n1.Ver o dobro de um número.\n2.Somar dois números.\n3.Subtrair dois números.\n4.Sair.'))
    return parseFloat(opcao)
}

function verDobro(){
    const n = parseInt(prompt('Digite o número para ver seu dobro:'));
    const resultado = dobro(n)
    if(isNaN(n)){
        alert(`Número inválido.`)
        return
    }
    alert(`O dobro de ${n} = ${resultado}`)
}

function somarDoisNumeros(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    const resultado = somar(n,n2)
    if(isNaN(n) || isNaN(n2)){
        alert('Número inválido.')
        return
    }
    alert(`Somando ${n} + ${n2} = ${resultado}`)
}

function subrairDoisNumeros(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    const resultado = subtrair(n,n2)
    if(isNaN(n) || isNaN(n2)){
        alert('Número inválido')
        return
    }
    alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
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
            subrairDoisNumeros()
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert('Opção inválida,tente novamente.')
    }
}while(escolha !== 4)