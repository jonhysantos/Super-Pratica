const veiculo = {
    modelo:'carro',
    passageiros:[],
    limitePassageiros:5,
    velocidade:0,
    aumentarVelocidade:function(aceleracao){
        this.velocidade += aceleracao
        alert(`A velocidade foi aumentada para ${this.velocidade} km/h`)
    },
    diminuirVelocidade:function(desaceleracao){
        if(this.velocidade - desaceleracao >= 0){
            this.velocidade -= desaceleracao
            alert(`A velocidade foi diminuída para ${this.velocidade}`)
        }else{
            alert(`O veículo está parado.`)
        }
    },
    adicionarPassageiros:function(nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiros){
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} foi adicionado como passageiro(a)`)
        }else if(this.velocidade > 0){
            alert(`Não é possível adicionar passageiros com o veículo em movimento.`)
        }else{
            alert(`Limite de passageiros atingido.`)
        }
    },
}

function mostrarMenu(){
    return prompt(`Modelo: ${veiculo.modelo}.\nLimite de passageiros: ${veiculo.limitePassageiros}.\nVelocidade atual: ${veiculo.velocidade} km/h.\nPassageiros: ${veiculo.passageiros.join(', ')}\nEscolha uma opção:\n1.Aumentar velocidade.\n2.Diminuir velocidade.\n3.Adicionar passageiros.\n4.Sair`)
}

let escolha 

while(true){
    escolha = mostrarMenu()

    switch(escolha){
        case "1":
            const aceleracao = parseInt(prompt(`Digite a quantidade de velocidade:`));
            veiculo.aumentarVelocidade(aceleracao)
            break
        case "2":
            const desaceleracao = parseInt(prompt('Digite a quantidade que deseja desacelerar:'));
            veiculo.diminuirVelocidade(desaceleracao)
            break
        case "3":
            const nomePassageiro = prompt('Digite o nome do passageiro(a) para adicionar:')
            veiculo.adicionarPassageiros(nomePassageiro)
            break
        case "4":
            alert('Saindo...')
            break
        default:
            alert('Opção inválida,tente novamente.')
    }
    if(escolha === "4"){
        break
    }
}