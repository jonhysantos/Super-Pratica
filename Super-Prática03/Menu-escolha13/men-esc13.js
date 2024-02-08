import { dobro,somar,subtrair } from "./Funções13.js";

// criamo o menu que aparecerá para o usuário.
function mostraMenu(){
    // Solicite ao usuário escolher uma operação.
    const opcao = parseFloat(prompt('Escolha uma operação. \n1 Ver o dobro de um número. \n2 Somar dois números. \n3 Subtrair dois números. \n4 Sair.'))
    return parseFloat(opcao)
}

// Criamos funções auxíliares para ajudar em cada parte do código.
function calcularDobro(){
    let n = parseFloat(prompt('Digite o primeiro número.'))
    let resultado = dobro(n)
    if(!isNaN(n)){
        window.alert(`O dobro de ${n} = ${resultado}`)
    }else{
        window.alert('Número inválido')
    }
}

function calcularSoma(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    let resultado = somar(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A soma entre ${n} + ${n2} = ${resultado}`)
    }
}

function calcularSubtrair(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    let resultado = subtrair(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A subtração entre ${n} - ${n2} = ${resultado}`)
    }else{
        window.alert('número inválido.')
    } 
}

let Escolha

do{
    Escolha = mostraMenu()
    // usamos o switch para cada parte do programa.
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


}while(Escolha !==4) // Tudo isso se a escolha for diferente de 4.