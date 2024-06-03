import { dobro,somar,subtrair } from "./funcoes29.js";

function mostrarMenu(){
    let opcao = parseInt(prompt('Escolha uma operação:\n1.Ver o dobro de um número.\n2.Somar dois números.\n3.Subtrair dois números.\n4.Sair.'))
    return parseInt(opcao)
}

function calcularDobro(){
    const n = parseInt(prompt('Digite um número para ver seu dobro'));
    const resultado = dobro(n);
    if(isNaN(n)){
        alert('Número inválido.')
    }else{
        alert(`O dobro de ${n} = ${resultado}`)
    }
}

function calcularSoma(){
    const n = parseInt(prompt('Digite o primeiro número:'));
    const n2 = parseInt(prompt('Digite o segundo número:'));
    const resultado = somar(n,n2);
    if(isNaN(n) || isNaN(n2)){
        alert('Número inválido')
        return
    }

    alert(`Somando ${n} + ${n2} = ${resultado}`)
}

function calcularSubtracao(){
    const n = parseInt(prompt('Digite o primeiro número:'));
    const n2 = parseInt(prompt('Digite o segundo número:'));
    const resultado = subtrair(n,n2);
    if(isNaN(n) || isNaN(n2)){
        alert('Número inválido.')
        return
    }

    alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
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
            calcularSubtracao()
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert('Opção inválida,tente novamente.')
    }

}while(escolha !== 4)