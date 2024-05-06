import { dobro,somar,subtrair } from "./funcoes27.js";

function mostrarMenu(){
    const opcao = parseInt(prompt(`Escolha uma opção:\n1.Vero dobro de um número:\n2.Somar dois números:\n3.Subtrair dois números:\n4.Sair`))
    return parseInt(opcao)
}

// Criamos funcoes auxiliares para ajudar 
function verDobro(){
    const n = parseInt(prompt('Digite um número para ve seu dobro:'))
    const resultado = dobro(n)
    if(isNaN(n)){
        alert('Por favor, digite um número válido.')
        return
    }
      alert(`O dobro de ${n} = ${resultado}`)
    
}

function subtrairDoisNumeros(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    const resultado = subtrair(n,n2)
    if(isNaN(n) || isNaN(n2)){
        alert('Número inválido')
        return
    }
    alert(`A soma entre ${n} - ${n2} = ${resultado}`)
    
}

function somarDoisNumeros(){
    const n = parseInt(prompt('Digite o primeiro número:'))
    const n2 = parseInt(prompt('Digite o segundo número:'))
    const resultado = somar(n,n2)
    if(isNaN(n) || isNaN(n2)  ){
        alert('Número inválido')
        return
    }
    alert(`A soma entre ${n} + ${n2} = ${resultado}`)
}

let escolha 

do{

    escolha = mostrarMenu()
    switch(escolha){
        case 1:
            verDobro()
            break
        case 2:
            somarDoisNumeros()
            break
        case 3:
            subtrairDoisNumeros()
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert('Opção inválida,tente novamente.')
    }
}while(escolha !==4)