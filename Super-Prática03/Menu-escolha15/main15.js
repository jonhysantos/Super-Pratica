import { dobro,somar,subtrair } from "./Funções15.js";

// Mostra o menu

function mostraMenu(){
    let opcao = parseFloat(prompt('Escolha um operação. \n1 Ver o dobro de um número. \n2 Somar dois números. \n3 Subtrair dois números. \n4 Sair.'))
    return parseFloat(opcao)
}

// Criamos funções auxíliares para cada parte do programa.
function calcularDobro(){
    let n = parseFloat(prompt('Digite um número:'))
    const resultado = dobro(n)
    if(!isNaN(n)){
        window.alert(`O dobro de ${n} = ${resultado}`)
    }else{
        window.alert('número inválido, tente novamente.')
    }
}

function calcularSoma(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = somar(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A soma entre ${n} + ${n2} = ${resultado}`)
    }else{
        window.alert('Número inválido.')
    }
}

function subtrairDoisNumeros(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = subtrair(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`Ao subtrair ${n} - ${n2} = ${resultado}`)
    }else{
        window.alert('Número inválido.')
    }
}

let Escolha

do{
    Escolha = mostraMenu()
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
            window.alert('Saindo.....')
            break
        default:
            window.alert('Opção inválida, tente novamente')
    }
}while(Escolha !==4)