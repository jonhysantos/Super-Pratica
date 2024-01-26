import {dobro,somar,subtrair} from './Funções06.js'

// Criamos funções auxíliares para cada parte do programa.

function mostrarMenu(){
    let opcao = prompt('Escolha uma operação.\n1 Dobro de um número. \n2 Somar dois números. \n3 Subtrair dois números. \n4 Sair.')
    return parseFloat(opcao)
}

function calcularDobro(){
    let numero = parseFloat(prompt('Digite um número:'))
    const resultado = dobro(numero)
    if(!isNaN(numero)){
        window.alert(`O dobro de ${numero} = ${resultado}`)
    }else{
        window.alert('Número inválido, tente novamente.')
    }
}

function calcularsoma(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = somar(n1,n2)
    if(!isNaN(n1) && !isNaN(n2)){
        window.alert(`A soma entre ${n1} + ${n2} = ${resultado}`)
    }else{
        window.alert('Número inválido, tente novamente.')
    }
}

function subtracao(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = subtrair(n1,n2)
    if(!isNaN(n1) && !isNaN(n2)){
        window.alert(`A subtração entre ${n1} - ${n2} = ${resultado}`)
    }else{
        window.alert('Número inválido, tente novamente.')
    }
}

// criamos uma variável com escopo 

let escolha

do{
    escolha = mostrarMenu()
    switch(escolha){
        case 1:
            calcularDobro()
            break
        case 2:
            calcularsoma()
            break
        case 3:
            subtracao()
            break
        case 4:
            window.alert('Saindo....')
            break
        default:
            window.alert('opção inválida, tente novamente.')
    }
}while(escolha !== 4)