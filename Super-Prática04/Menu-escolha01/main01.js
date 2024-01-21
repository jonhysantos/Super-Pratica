// Importamos as funções.
import {dobro,somar,subtrair} from './Funções-01.js'

// Criamos funções auxíliares para cada parte do programa.
function mostrarMenu(){
    const opcao = prompt(`Escolha uma operação: \n1 Dobro de um número. \n2 Somar dois números. \n3 Subtrair dois números. \n4 Sair.`)
    return parseInt(opcao)
}

function calcularDobro(){
    let numero = parseFloat(prompt('Digite um número:'))
    if(!isNaN(numero)){
        let resultado = dobro(numero)
        window.alert(`O dobro de ${numero} é ${resultado}`)
    }else{
        window.alert('Por favor insira um número válido.')
    }
}

function calcularSoma(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    if(!isNaN(n1) && !isNaN(n2)){
        let resultado = somar(n1,n2)
        window.alert(`A soma de ${n1} e ${n2} é ${resultado}`)
    }else{
        window.alert('Por favor insira números válidos.')
    }
}

function calcularSubtracao(){
    let n1 = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    if(!isNaN(n1) && !isNaN(n2)){
        let resultado = subtrair(n1,n2)
        window.alert(`A subtração de ${n1} e ${n2} é ${resultado}`)
    }else{
        window.alert('Por favor insira números válidos.')
    }
}

// Criamos uma variável no scopo externo para salvar a opção escolhida.

let escolha
do {
    escolha = mostrarMenu();
    // Usamos o switch para executar uma função diferente para cada caso.
    switch (escolha){
        case 1:
            calcularDobro();
            break;
        case 2:
            calcularSoma();
            break;
        case 3:
            calcularSubtracao();
            break;
        case 4:
            window.alert('Saindo.....')  
            break;
        default:
            window.alert('Opção inválida, tente novamente.')                    
    }
}while (escolha !== 4); // tudo isso enquanto a esolha for diferente de "4 sair".