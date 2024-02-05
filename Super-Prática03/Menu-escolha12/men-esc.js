// Importamos as funções do outro arquivo.
import { dobro,somar,subtrair } from "./funções12.js";

// Criamos o menu que aparecerá para o usuário.
function MostrarMenu(){
    let opcao = parseInt(prompt('Escolha uma operação: \n1 Ver o dobro de um número. \n2 Somar dois números. \n 3 Subtrair dois número. \n4 Sair.'))
    return parseInt(opcao)
}

// Criamos funções auxíliares para cada parte do programa.

function calcularDobro(){
    let n = parseFloat(prompt('Digite o número:'))
    const resultado = dobro(n)
    if(!isNaN(n) ){
        window.alert(`O dobro de ${n} = ${resultado}`)
    }else{
        window.alert('Número inválido.')
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

function calcularSubtracao(){
    let n = parseFloat(prompt('Digite o primeiro número:'))
    let n2 = parseFloat(prompt('Digite o segundo número:'))
    const resultado = subtrair(n,n2)
    if(!isNaN(n) && !isNaN(n2)){
        window.alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
    }
}

// Cramos um escopo global 

let Escolha

do{
    Escolha = MostrarMenu()
    // Usamos o switch case 
    switch(Escolha){
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
            window.alert('Saindo....')
            break
        default:
            window.alert('Opção inválida, tente novamente.')
    }
}while(Escolha !==4) // Tudo isso se escolha for diferente de 4 que nesse caso é sair.