import { dobro,somar,subtrair } from "./funcoes34.js"

function mostrarMenu(){
    let opcao = parseFloat(prompt(`Escolha uma opção:\n1.Ver o dobro de uma número.\n2.Somar dois números.\n3.Subtrair dois números.\n4.Sair`))
    return parseFloat(opcao)
}

function calcularDobro(){
    const n = parseInt(prompt('Digite o número para ver o dobro'))
    if(isNaN(n)){
        alert(`Número inválido`)
        return
    }

    const resultado = dobro(n)
    alert(`O dobro de ${n} = ${resultado}`)
}

function calcularSoma(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    if(isNaN(n) || isNaN(n2)){
        alert(`Número inválido`)
        return
    }   
    const resultado = somar(n,n2)
    alert(`Somando ${n} + ${n2} = ${resultado}`)
}

function calcularSubtracao(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    if(isNaN(n) || isNaN(n2)){
        alert(`Número inválido`)
        return
    }
    const resultado = subtrair(n,n2)
    alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
}

let escolha 

while(escolha !== 4){
    escolha = mostrarMenu()

    switch(escolha){
        case 1:
            calcularDobro()
            break
        case 2:
            calcularSoma()
            break
        case 3:
            calcularSubtracao()
            break
        case 4:
            alert(`Saindo...`)
            break
        default:
            alert(`Opção inválida,tente novamente`)
    }
}