import { dobro,somar,subtrair } from "./funcoes23.js";

function mostrarMenu(){
    let opcao = parseFloat(prompt('Escolha uma operação. \n1. Ver o dobro de um número.\n2. Somar dois números. \n3. Subtrair dois números. \n4 Sair'))
    return parseFloat(opcao)
}

// Cria funções separadamente para ajudar
function calcularDobto(){
    const n = parseFloat(prompt('Digite um número:'))
    const resultado = dobro(n)
    if(isNaN(n)){
        alert('Por favor, insira um número válido')
    }else{
        alert(`O dobro de ${n} = ${resultado}`)
    }
}

function calcularSoma(){
    const n = parseFloat(prompt('Digite o primeiro número:'))
    const n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = somar(n,n2)
    if(isNaN(n) || isNaN(n2)){
        alert('Por favor, insira um número válido.')
    }else{
        alert(`A soma entre ${n} + ${n2} = ${resultado}`)
    }
}

function calcularSubtracao(){
    const n = parseFloat(prompt('Digite o primeiro número:'))
    const n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = subtrair(n,n2)
    if(isNaN(n) || isNaN(n2)){
        alert(`Por favor, insira um número válido.`)
    }else{
        alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
    }
}

let Escolha

do{
    Escolha = mostrarMenu()
    switch(Escolha){
        case 1:
            calcularDobto()
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
            alert('Opção inválida, tente novamente.')
    }

}while(Escolha !==4)