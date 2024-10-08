const veiculo = {
    modelo:'carro',
    limitePassageiros: 5,
    passageiros: [],
    velocidadeAtual: 0,
    aumentarVelocidade:function(aceleracao){
        this.velocidadeAtual += aceleracao
        alert(`A velocidade foi aumentada para ${this.velocidadeAtual} km/h`);
    },
    diminuirVelocidade:function(desaceleracao){
        if(this.velocidadeAtual - desaceleracao > 0 ){
            this.velocidadeAtual -= desaceleracao
            alert(`A velocidade foi diminuída para ${this.velocidadeAtual} km/h`);
            return
        }
        this.velocidadeAtual = 0
        alert('O veículo está parado')
    },
    adicionarPassageiros:function(nomePassageiro){
        if(this.velocidadeAtual === 0 && this.passageiros.length < this.limitePassageiros){
            this.passageiros.push(nomePassageiro);
            alert(`${nomePassageiro} foi adicionado(a) como passageiro(a).`);
        }else if(this.velocidadeAtual > 0){
            alert(`Não é possível adicionar passageiros com o veículo em movimento`);

        }else{
            alert('Limite de passageiros atingido.')
        }
    },
}

let escolha 

do{
    escolha = parseInt(prompt(`Modelo:${veiculo.modelo}\nPassageiros:${veiculo.passageiros.join(', ')}\nLimite de passageiros:${veiculo.limitePassageiros}\nVelocidade atual:${veiculo.velocidadeAtual}\nEscolha uma opção:\n1.Aumentar velocidade.\n2.Diminuir velodiade.\n3.Adicionar passageiros.\n4.Sair`));

    switch(escolha){
        case 1:
            const aceleracao = parseInt(prompt('Digite a quantidade de aceleração que deseja aumentar:'));
            veiculo.aumentarVelocidade(aceleracao);
            break
        case 2:
            const desaceleracao = parseInt(prompt('Digite a quantidade de desaceleração:'));
            veiculo.diminuirVelocidade(desaceleracao);
            break
        case 3:
            const nomePassageiro = prompt(`Digite o nome do(a) passagiero(a):`);
            veiculo.adicionarPassageiros(nomePassageiro);
            break
        case 4:
            alert('Saindo...')
            break
        default:
            alert('Opção inválida,tente novamente.')
    }

    if(escolha === 4){
        break
    }
    

}while(escolha !== 4)