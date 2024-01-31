// Importamos as funções.
import {dobro,somar,subtrair} from './Funções10.js'

// Criamos o menu que será exibido na tela do usuário.
function mostrarMenu(){
    let opcao = prompt('Escollha uma operação. \n1 Ver o dobro de um número. \n2 Somar dois números. \n3 Subtrair dois números. \n4 Sair.')
    return parseFloat(opcao)
}

// Criamos funções auxíliares para cada parte do programa.

function calcularDobro(){
    let n = parseFloat(prompt('Digite um número:'))
    const resultado = dobro(n)
    if(!isNaN(n)){
        window.alert(`O dobro de ${n} = ${resultado}`)
    }else{
        window.alert('Número inválido.')
    }
}

function calcularSomar(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número.'))
    const resultado = somar(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A soma entre ${n} + ${n2} = ${resultado}`)
    }else{
        window.alert('Número inválido.')
    }
}

function subtracao(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = subtrair(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A subtração entre ${n} - ${n2} = ${resultado}`)
    }
}

// Criamos uma variável no escopo externo para salvar a opção escolhida.

let escolha 

do{
    escolha = mostrarMenu()

    // Usamos o switch para executar uma função diferente para cada caso.
    switch(escolha){
        case 1:
            calcularDobro()
            break
        case 2:
            calcularSomar()
            break
        case 3:
            subtracao()
            break
        case 4:
            window.alert('Saindo.....')
            break
        default:
            window.alert('Opção inválida, tente novamente.')
    }
}while(escolha !==4)