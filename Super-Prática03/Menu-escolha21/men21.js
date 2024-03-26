import { dobro,subtrair,somar } from "./funcoes.js";

function mostrarMenu(){
    let opcao = parseFloat(prompt('Escolha uma operação. \n 1 Ver o dobro de um número. \n 2 Somar dois números. \n3 Subtrair dois números. \n 4 Sair.'))
    return parseFloat(opcao)
}

function calcularDobro(){
    let n = parseFloat(prompt('Digite um número:'))
    const resultado = dobro(n)
    if(isNaN(n)){
        window.alert('Digite um número válido.')
    }else{
        window.alert(`O dobro de ${n} = ${resultado}`)
    }
}

function calcularSoma(){
    let n = parseFloat(prompt('Digite um número:'))
    let n2 = parseFloat(prompt('Digite outro número:'))
    const resultado = somar(n,n2)
    if(isNaN(n) || isNaN(n2)){
        window.alert('Digite um número válido.')
    }else{
        window.alert(`A soma entre ${n} + ${n2} = ${resultado}`)
    }
}

function subtraindo(){
    let n = parseFloat(prompt('Digite um número:'))
    let n2 = parseFloat(prompt('Digite outro número:'))
    const resultado = subtrair(n,n2)
    if(isNaN(n) || isNaN(n2)){
        window.alert('Número inválido.')
    }else{
        window.alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
    }
}

let Escolha

do{
    Escolha = mostrarMenu()
    switch(Escolha){
        case 1:
            calcularDobro()
            break
        case 2:
            calcularSoma()
            break
        case 3:
            subtraindo()
            break
        case 4:
            window.alert('Saindo.....')
            break
        default:
            window.alert('Opção inválida tente novamente.')
    }
}while(Escolha !==4)