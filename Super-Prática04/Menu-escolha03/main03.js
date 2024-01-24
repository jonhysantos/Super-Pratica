// Importamos as funções de outro arquivo.
import {dobro,somar,subtrair} from './Funções03.js'

// Criamos funções auxíliares para cada parte do programa.

function mostrarMenu(){
    const opcao = prompt('Esolha uma operação: \n1. Dobro de um número. \n2. Somar dois números. \n3. Subtrair dois números. \n4. Sair.')
    return parseFloat(opcao)
}

function calcularDobro(){
    let numero = parseFloat(prompt('Digite um número:'))
    if(!isNaN(numero)){
        let resultado = dobro(numero)
        window.alert(`O dobro de ${numero} é ${resultado}`)
    }else{
        window.alert('Por favor, insira um número válido.')
    }
}

function calcularSoma(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    if(!isNaN(n1) && !isNaN(n2)){
        let resultado = somar(n1,n2)
        window.alert(`A soma entre ${n1} + ${n2} é igual a ${resultado}`)
    }else{
        window.alert('Por favor, insira um número válido.')
    }
}

function subtracao(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    if(!isNaN(n1) && !isNaN(n2)){
        let resultado = subtrair(n1,n2)
        window.alert(`A subtração entre ${n1} - ${n2} é igual a ${resultado}`)
    }else{
        window.alert('Por favor, insira um número válido.')
    }
}

// Criamos uma variável no escopo externo para salvar a opção escolhida.

let escolha 
do{
    escolha = mostrarMenu()
    // Usamos o switch executar uma função diferente para cada caso.
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
            window.alert('Opção inválida tente novamente.')                
    }
}while(escolha !==4 ) // Tudo isso se a escolha for diferente de 4. que nesse caso é sair.
