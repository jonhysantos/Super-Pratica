// Inicializa os arrays para armazenar os números e os pesos.

const numeros = []
const pesos = []

// Loop para solicitar numeros e pesos.

while(true){
    const numero = parseFloat(prompt('Digite um números (ou deixe em branco para encerrar)'))

    // Se não for um número válido encerrar o loop.

    if(isNaN(numero)){
        break
    }

    const peso = parseFloat(prompt(`Digite o peso para o ${numero}:`))
    if(isNaN(peso)){
        window.alert('Por favor, insira um peso válido.')
    }else{
        numeros.push(numero)
        pesos.push(peso)

    }
}

if(numeros.length === 0){
    window.alert('Nenhum número inserido, encerrando......')
}else{

    // Calcula a média ponderada.
    let somaNotas = 0
    let somaPesos = 0

    for(let i = 0; i < numeros.length; i++){
        somaNotas += numeros[i] * pesos [i]
        somaPesos += pesos[i]
    }
    const mediaPonderada = somaNotas / somaPesos

    // Exibe o resultado.
    window.alert(`A média ponderada é ${mediaPonderada.toFixed(2)} `)
}
    

