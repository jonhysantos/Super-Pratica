import { soma,dobro,subtrair } from "./function.js"

function mostrarMenu(){
    let opcao = parseFloat(prompt('Escolha uma opção: 1.Ver o dobro de um número\n 2.Somar dois números\n3.Subtrair dois números\n 4.Sair'))
    return parseFloat(opcao)
}

function verDobro(){
    const n = parseFloat(prompt('Digite um número para ver o seu dobro:'))
    if(isNaN(n)){
        alert('Por favor digite um número')
        return
    }
        const result = dobro(n)
        alert(`O dobro de ${n} é = ${result}`)
}

function verSubtracao(){
    const n = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número'));
    if(isNaN(n) || isNaN(n2)){
        alert('Favor preencher os campos')
        return
    }
        const result = subtrair(n,n2)
        alert(`Subtraindo ${n} - ${n2} é = a ${result}`)
}

function verSoma(){
    const n = parseFloat(prompt('Digite o primeiro número:'));
    const n2 = parseFloat(prompt('Digite o segundo número'));
    if(isNaN(n) || isNaN(n2)){
        alert('Favor preencher os campos')
        return
    }
    const result = soma(n,n2)
    alert(`Somando ${n} + ${n2} = ${result}`)
}

let escolha 

do{
    escolha = mostrarMenu()
    switch(escolha){
        case 1:
            verDobro()
            break
        case 2:
            verSoma()
            break
        case 3:
            verSubtracao()
            break
        case 4:
            alert('Saindo....')
            break
        default:
            alert('Opção inválida tente novamente!')
    }


}while(escolha !== 4)

