// Importamos as funções de outro arquivo.
import { dobro,somar,subtrair } from "./Funções14.js";

// Menu que será mostrado ao usuário.
function mostrarMenu(){
    let opcao = parseFloat(prompt('Escolha uma operação. \n1 Dobro. \n2 Somar. \n3 Subtrair. \n4 Sair.'))
    return parseFloat(opcao)
}

// Criamos funções auxíliares para cada parte do programa.
function calcularDobro(){
    let n = parseFloat(prompt('Digite um número:'))
    const resultado = dobro(n)
    if(!isNaN(n)){
        window.alert(`O dobro de ${n} = ${resultado}`)
    }
}

function calcularSoma(){
    let n = parseFloat(prompt('Digite o primeoro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = somar(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A soma entre ${n} + ${n2} = ${resultado}`)
    }
}

function subtrairDoisNumeros(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo núemro:'))
    const resultado = subtrair(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A subtração entre ${n} - ${n2} = ${resultado}`)
    }
}

// Criamos uma variável com escopo global
let Escolha

do{
    Escolha = mostrarMenu()
    // Usamos o switch para dar a opcao ao usuario.
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


}while(Escolha !== 4) // Tudo isso se a escolha for diferente de 4.