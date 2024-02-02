// Importamos as funções de outro arquivo.
import {dobro,somar,subtrair} from './Funções11.js'

// Criamos o menu que aparecerá para o usuário.
function mostrarMenu(){
    let opcao = prompt('Escolha uma operação. \n1 Ver o dobro de um número. \n2 Somar dois números. \n3 Subtrair dois números. \n4 Sair.')
    return parseFloat(opcao)
}

// Criamos funções auxiliáres para cada parte do código

function calcularDobro(){
    let n = parseFloat(prompt('Digte um número:'))
    const resultado = dobro(n)
    if(!isNaN(n)){
        window.alert(`O dobro de ${n} = ${resultado}.`)
    }else{
        window.alert('Por favor, insira um número válido.')
    }
}

function calcularSoma(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = somar(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A soma entre ${n} + ${n2} = ${resultado}.`)
    }else{
        window.alert('Por favor, insira um número válido.')
    }
}

function calcularSubtrair(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = subtrair(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A subtração entre ${n} - ${n2} = ${resultado}`)
    }else{
        window.alert('Insira um número válido')
    }
}

// Criamos uma variável no escopo externo para salvar a opção escolhida.
let Escolha
do{
    Escolha = mostrarMenu()
    // Usamos o switch para executar uma função diferente para cada caso.
    switch(Escolha){
        case 1:
            calcularDobro()
            break
        case 2:
            calcularSoma()
            break
        case 3:
            calcularSubtrair()
            break
        case 4:
            window.alert('Saindo.....')
            break
        default:
            window.alert('Opção inválida, tente novamente.')
    }
}while(Escolha !==4) // Tudo isso se a escolha for diferente de 4 'sa