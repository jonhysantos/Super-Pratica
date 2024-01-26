// Importamos as funções de outro arquivo.
import {dobro,somar,subtrair} from './Funções07.js'

// Criamos o menu a ser mostrado na tela.

function mostarMenu(){
    const opcao = prompt('Escolha uma operação. \n1 Ver o dobro de um número. \n2 Somar dois número. \n3 Subtrair dois números. \n4 Sair.')
    return parseFloat(opcao)
}

// Criamos funções auxíliares para cada parte do programa.

function calcularDobro(){
    let numero = parseFloat(prompt(`Digite o número:`))
    const resultado = dobro(numero)
    if(!isNaN(numero)){
        window.alert(`O dobro de ${numero} = ${resultado}`)
    }else{
        window.alert('Por favor digite um número válido.')
    }
}

function calcularSoma(){
    let n1 = parseFloat(prompt(`Digite o primeiro número:`))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = somar(n1,n2)
    if(!isNaN(n1) && !isNaN(n2) ){
        window.alert(`A soma entre ${n1} + ${n2} = ${resultado}`)
    }else{
        window.alert('Por favor, digite um número válido.')
    }
}

function subtracao(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número.'))
    const resultado = subtrair(n1,n2)
    if(!isNaN(n1) && !isNaN(n2)){
        window.alert(`A subtração entre ${n1} - ${n2} = ${resultado}`)
    }else{
        window.alert('Por favor, insira um número válido.')
    }
}

// Criamos uma variável com escopo 

let escolha 

do{
    escolha = mostarMenu()
    // criamos um switch para cada caso do programa
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
            window.alert('Número inválido, tente novamente.')
    }
}while(escolha !==4) // Tudo isso se esocolha for diferente de 4.