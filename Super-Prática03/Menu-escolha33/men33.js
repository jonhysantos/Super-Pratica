import { dobro,somar,subtrair } from "./funcoes33.js";

function mostrarMenu(){
    let opcao = parseFloat(prompt(`Escolha uma opção: 1.Ver o dobro de um número.\n2.Somar dois números.\n3.Subtrair dois números.\n4.Sair`))
    return parseFloat(opcao)
}

function verDobro(){
    const n = parseInt(prompt('Digite um número para ver seu dobro:'))
    if(isNaN(n)){
        alert('Por favor, insira um número.')
        return
    }

    const resultado = dobro(n)
    alert(`O dobro de ${n} = ${resultado}`)
}

function calcularSoma(){
    const n = parseInt(prompt(`Digite o primeiro número:`))
    const n2 = parseInt(prompt(`Digite o segundo número:`))
    if(isNaN(n) || isNaN(n2)){
        alert(`Por favor, apenas números`)
        return
    }
    const resultado = somar(n,n2)
    alert(`A soma entre ${n} + ${n2} = ${resultado}`)
}

function calcularSubtracao(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    if(isNaN(n) || isNaN(n2)){
        alert('Por favor, apenas números.')
        return
    }

    const resultado = subtrair(n,n2)
    alert(`A subtração entre ${n} - ${n2} = ${resultado}`)
}

let escolha 

do{
    escolha = mostrarMenu()

    switch(escolha){
        case 1:
            verDobro()
            break
        case 2:
            calcularSoma()
            break
        case 3:
            calcularSubtracao()
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert(`Opção inválida, tente novamente.`)
    }
}while(escolha !== 4)