// Importa as funções do outro arquivo.
import { dobro,soma,subtrair } from "./funcoes22.js";

// Cria uma função pra retornar a opção.
function mostrarMenu(){
    let opcao = parseFloat(prompt('Escolha uma operação. \n 1 Ver o dobro de um número. \n 2 Somar dois números. \n 3 Subtrair dois números. \n 4 Sair.'))
    return parseFloat(opcao)
}

// Cria funções auxiliares para ajudar no codigo.

function calcularDobro(){
    let n = parseFloat(prompt('Digite um número:'))
    const resultado = dobro(n)
    if(isNaN(n)){
        window.alert('Por favor, insira um número.')
    }else{
        window.alert(`O dobro de ${n} = ${resultado}`)
    }
}

function calcularSoma(){
    let n = parseFloat(prompt('Digite um número:'))
    let n2 = parseFloat(prompt('Digite outro número:'))
    const resultado = soma(n,n2)
    if(isNaN(n) || isNaN(n2)){
        window.alert('Por favor, insira um número')
    }else{
        window.alert(`A Subtração entre ${n} + ${n2} = ${resultado}`)
    }
}

function subtrairDoisNumeros(){
    let n = parseFloat(prompt('Digite um número:'))
    let n2 = parseFloat(prompt('Digite outro número:'))
    const resultado = subtrair(n,n2)
    if(isNaN(n) || isNaN(n2)){
        window.alert('Por favor, insira um número')
    }else{
        window.alert(`A soma entre ${n} - ${n2} = ${resultado}`)
    }
}

let Escolha 

do{
    Escolha = mostrarMenu()
    switch(Escolha){
        case 1:
            calcularDobro()
            break
        case 2:
            calcularSoma()
            break
        case 3:
            subtrairDoisNumeros()
            break
        case 4:
            window.alert('Saindo....')
            break
        default:
            window.alert('Opção inválida, tente novamente.')
    }

}while(Escolha !==4)