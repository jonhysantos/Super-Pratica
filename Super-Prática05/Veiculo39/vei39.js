const veiculo = {
    modelo:'carro',
    velocidade: 0,
    limitePassageiros: 5,
    passageiros:[],
    aumentarVelocidade:function(aceleracao){
        this.velocidade += aceleracao
        alert(`A velocidade foi aumentada para ${this.velocidade} km/h`);
    },
    diminuirVelocidade:function(desaceleracao){
        if(this.velocidade - desaceleracao >= 0){
            this.velocidade -= desaceleracao
            alert(`A velocidade foi diminuída para ${this.velocidade} km/h`)
        }else{
            this.velocidade = 0
            alert(`O veículo está parado`)
        }
    },

    adicionarPassageiros:function(nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiros){
            this.passageiros.push(nomePassageiro);
            alert(`O ${nomePassageiro} foi adicionado(a) como passageiro(a).`);

        }else if(this.velocidade > 0 ){
            alert(`Não é possível adicionar passageiros com o veículo em movimento.`);
        }else{
            alert(`Limite de passageiros atingido.`)
        }
    },
}

let escolha 

while(escolha !== 4){
    escolha = parseInt(prompt(`Modelo: ${veiculo.modelo}\nVelocidade: ${veiculo.velocidade}\nLimite de passageiros: ${veiculo.limitePassageiros}\nPassageiros: ${veiculo.passageiros.join(', ')}\nEscolha uma opção:\n1.Aumentar velocidade.\n2.Diminuir velocidade.\n3.Adicionar passageiros.\n4.Sair`));

    switch(escolha){
        case 1:
            const aceleracao = parseInt(prompt('Digite a quantidade de aceleração que deseja aumentar'));
            veiculo.aumentarVelocidade(aceleracao);
            break
        case 2:
            const desaceleracao = parseInt(prompt('Digite a quantidade de desaceleração:'));
            veiculo.diminuirVelocidade(desaceleracao);
            break
        case 3:
            const nomePassageiro = prompt('Digite o nome do passagiero(a)');
            veiculo.adicionarPassageiros(nomePassageiro);
            break
        case 4:
            alert(`Saindo...`);
            break
        default:
            alert(`Opção inválida,tente novamente.`)
    }
}