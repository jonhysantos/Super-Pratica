// Importamos as funções de outro arquivo.
import {dobro,somar,subtrair} from './Funções09.js'

// Criamos uma função pra mostrar na tela do usuário.
function mostrarMenu(){
    const opcao = prompt('Escolha uma operação. \n1 Ver o dobro de um número. \n2 Somar dois números. \n3 Subtrair dois números. \n4 Sair.')
    return parseFloat(opcao)
}

// Criamos funções auxíliares para cada parte do programa.

function calcularDobro(){
    let n = parseFloat(prompt('Digite um número:'))
    const resultado = dobro(n)
    if(!isNaN(n)){
        window.alert(`O dobro de ${n} = ${resultado}.`)
    }else{
        window.alert('Por favor, digite um número válido.')
    }
}

function calcularSoma(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = somar(n1,n2)
    if(!isNaN(n1) && !isNaN(n2)){
        window.alert(`A soma entre ${n1} + ${n2} = ${resultado}.`)
    }else{
        window.alert('Por favor, insira um número válido.')
    }
}

function subtracao(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = subtrair(n1,n2)
    if(!isNaN(n1) && !isNaN(n2)){
        window.alert(`A subtração de ${n1} - ${n2} = ${resultado}`)
    }
}

// Criamos uma variável com um escopo.
let escolha 

do{
    escolha = mostrarMenu()
    // Criamos um switch case para cada caso do programa.
    switch(escolha){
        case 1:
            calcularDobro()
            break
        case 2:
            calcularSoma()
            break
        case 3:
            subtracao()
            break
        case 4:
            window.alert('Saindo......')
            break
        default:
            window.alert('Opção inválida, tente novamente')
    }
}while(escolha !==4)

