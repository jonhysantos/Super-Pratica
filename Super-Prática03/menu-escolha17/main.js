import { dobro,somar,subtrair } from "./funções.js";

function mostrarMenu(){
    let opcao = parseFloat(prompt('Escolha uma operação. \n1 Ver o dobro de um número. \n2 Somar dois números. \n3 Subtrair dois números. \n4 Sairn'))
    return parseFloat(opcao)
}

function calcularDobro(){
    let n = parseFloat(prompt(`Digite um número.`))
    let resultado = dobro(n)
    if(isNaN(n)){
        window.alert(`Por favor digite um número válido.`)
    }else{
        window.alert(`O dobro de ${n} = ${resultado}`)
    }
}

function calcularSoma(){
    let n = parseFloat(prompt(`Digite o primeiro número:`))
    let n2 = parseFloat(prompt(`Digite o segundo número:`))
    let resultado = somar(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`A soma entre ${n} + ${n2} = ${resultado}`)
    }else{
        window.alert('Por favor, digite um número válido')
    }
}

function subtrairDoisnumeros(){
    let n = parseFloat(prompt(`Digite o primeiro número:`))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    let resultado = subtrair(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
    }else{
        window.alert('numero inválido.')
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
            subtrairDoisnumeros()
            break
        case 4:
            window.alert('Saindo.....')
            break
        default:
            window.alert('Opção inválida, tente novamente')
    }
}while(escolha !== 4)


