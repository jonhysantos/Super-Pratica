import {dobro,somar,subtrair} from './Funções19.js'

function mostrarMenu(){
    let opcao = parseFloat(prompt('Escolha uma operação. \n1 vero dobro de uma número. \n2 somar dois números.\n3 Subtrair dois números. \n4 Sair.'))
    return parseFloat(opcao)
}

function calcularDobro(){
    let n = parseFloat(prompt('Digite um número:'))
    let resultado = dobro(n)
    if(isNaN(n)){
        window.alert('Por favor, digite um número válido.')
    }else{
        window.alert(`O dobro de ${n} = ${resultado}`)
    }
}

function calcularSoma(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    let resultado = somar(n,n2)
    if(isNaN(n) && isNaN(n2)){
        window.alert('Por favor, digite um número valido.')
    }else{
        window.alert(`Somando ${n} + ${n2} = ${resultado}`)
    }
}

function subtracao(){
    let n = parseFloat(prompt('Digite o primeoro número;'))
    let n2 = parseFloat(prompt('Digite o segundo número;'))
    let resultado = subtrair(n,n2)
    if(isNaN(n) && isNaN(n2) ){
        window.alert('Por favor, digite um número.')
    }else{
        window.alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
    }
}

let escolha

do{
    escolha = mostrarMenu()
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
            window.alert('opção inválida, tente novamente.')
    }

}while(escolha !== 4)