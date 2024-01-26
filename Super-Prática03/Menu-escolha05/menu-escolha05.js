// Importamos a função de outro arquivo.
import {dobro,somar,subtrair} from './Funções05.js'

// Criamos funções auxíares para cada parte do código.

function mostrarMenu(){
    const opcao = prompt(`Escolha uma operação. \n1 Dobro de um número. \n2 Somar dois número. \n3 Subtrair dois números. \n4 sair.`)
    return parseFloat(opcao)
}

function calcularDobro(){
    let numero = parseFloat(prompt(`Digite um número:`))
    const resultado = dobro(numero)
    if(!isNaN(numero)){
        window.alert(`O dobro de ${numero} é igual a ${resultado}`)
    }else{
        window.alert('Número inválido.')
    }
}

function calcularSoma() {
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = somar(n1,n2)
    if(!isNaN(n1) && !isNaN(n2)){
        window.alert(`A soma entre ${n1} + ${n2} é igual a ${resultado}`)
    }else{
        window.alert('Número inválido.')
    }
}

function subtracao(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = subtrair(n1,n2)
    if(!isNaN(n1) && !isNaN(n2)){
        window.alert(`A subtração entre ${n1} - ${n2} é igual a ${resultado}`)
    }else{
        window.alert('Número inválido.')
    }
}

// Cramos uma variável no escopo externo para salvar a opção escolhida.
let escolha

do{
    escolha = mostrarMenu()
    // Usamos o switch para executar uma função diferente para cada caso.
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
            window.alert('Saindo....')
            break
        default:
            window.alert('Opção inválida, por favor tente novamente.')
    }
}while(escolha !==4) // Tudo isso se caso escolha for diferente de 4.