// Inicializa os arrays para armazenar os números e os pesos.
const numeros = [];
const pesos = [];

// Loop para solicitar números e pesos.
while(true){
    const numero = parseFloat(prompt('Digite um número (ou deixe em branco para encerrar):'));

    // Se não for um numero válido encerrar o loop.
    if(isNaN(numero)){
        break
    }

    const peso = parseFloat(prompt(`Digite o peso para o ${numero}:`));

    if(isNaN(peso)){
        window.alert('Por favor, insira um peso válido.');
    }else{
        numeros.push(numero);
        pesos.push(peso);
    }
}
if(numeros.length === 0){
        window.alert('Nenhum número inserido, encerrando...');
    }else{
        // calcula a media ponderada.
        let somaNotas = 0;
        let somaPesos = 0;
        for(let i = 0;i < numeros.length; i ++){
            somaNotas += numeros[i] * pesos[i]; 
            somaPesos += pesos[i];
        }
        const mediaPonderada = somaNotas / somaPesos;

        //Exibe o resultado.
        alert(`A média ponderada é ${mediaPonderada.toFixed(2)}`);
    }