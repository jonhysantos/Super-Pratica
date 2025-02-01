import { dobro,soma,sub } from "./functions.js";


function menuEscolha(){
    let opcao = parseFloat(prompt('Escolha uma opção:\n1.Ver o dobro de um número:\n2.Somar dois números.\n3.Subtrair dois números\n4.Sair.'))
    return parseFloat(opcao)
}

function verDobro(){
    const n = parseFloat(prompt('Digite um número para ver seu dobro'));
    if(isNaN(n)){
        alert('Digite um número')
        return
    }
    const result = dobro(n)
    alert(`O dobro de ${n} = ${result}`)
}

function verSoma(){
    const n = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número'));
    if(isNaN(n) || isNaN(n2)){
        alert(`Digite numeros validos`)
        return
    }
    const result = soma(n,n2)
    alert(`Somando ${n} + ${n2} = ${result}`);
}

function verSub(){
    const n = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número'));
    if(isNaN(n) || isNaN(n2)){
        alert(`Digite numeros validos`)
        return
    }
    const result = sub(n,n2)
    alert(`Subtraindo ${n} - ${n2} = ${result}`)

}

let escolha 

do{
    escolha = menuEscolha()
    switch(escolha){
        case 1:
            verDobro()
            break
        case 2:
            verSoma()
            break
        case 3:
            verSub()
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert('Opção inválida,tente novamente')

    }

}while(escolha !== 4)