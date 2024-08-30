import {dobro,subtrair,somar} from "./funcoes36.js"

function mostarMenu(){
    let opcao = parseFloat(prompt(`Escolha uma opção:\n1.Ver o dobro de um número.\n2.Somar dois números.\n3.Subtrair dois números.\n4.Sair.`));
    return parseFloat(opcao);
}

function calcularDobro(){
    const n = parseInt(prompt('Digite um número:'));
    if(isNaN(n)){
        alert(`Número inválido.`);
    }else{
        const resultado = dobro(n)
        alert(`O dobro de ${n} = ${resultado}`)
    }
}

function caluclarSoma(){
    const n = parseInt(prompt('Digite o primeiro número: '))
    const n2 = parseInt(prompt(`Digite o segundo número: `))
    if(isNaN(n) || isNaN(n2)){
        alert(`Número inválido`)
    }else{
        const resultado = somar(n,n2)
        alert(`Somando ${n} + ${n2} = ${resultado}`)
    }
}

function calcularSubtracao(){
    const n = parseInt(prompt(`Digite o primeiro número: `));
    const n2 = parseInt(prompt(`Digite o segundo número: `));
    if(isNaN(n) || isNaN(n2)){
        alert(`Número inválido.`);
    }else{
        const resultado = subtrair(n,n2);
        alert(`Subtraindo ${n} - ${n2} = ${resultado}`)
    }
}

let escolha 

while(escolha !== 4){
    escolha = mostarMenu()

    switch(escolha){
        case 1:
            calcularDobro();
            break
        case 2:
            caluclarSoma();
            break
        case 3:
            calcularSubtracao();
            break
        case 4:
            alert(`Saindo...`);
            break
        default:
            alert(`Opção inválida, tente novamente`);

    }
}

