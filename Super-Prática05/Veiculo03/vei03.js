const veiculo = {
    modelo: "carro",
    passageiros: [],
    limitePassageiro: 5,
    velocidade: 0,
    aumentarVelocidade:function(aceleracao){
        this.velocidade += aceleracao
        alert(`Velocidade aumentada para ${this.velocidade} km/h.`)
    },
    diminuirVelocidade:function(desaceleracao){
        if(this.velocidade - desaceleracao >= 0){
            this.velocidade -= desaceleracao
            alert(`Velocidade diminuida para ${this.velocidade} km/h`)
        }else {
            this.velocidade = 0
            alert('O veículo está parado.')
        }
    },
    adicionarPassageiro:function (nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiro){
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} foi adicionado como passageiro.`)
        }else if(this.velocidade > 0){
            alert(`Não é possível adicionar passageiros com o veículo em movimento.`)
        }else{
            alert('Limite de passageiros atingido')
        }
    },
}

function mostrarMenu(){
    return prompt(`Veículo: ${veiculo.modelo}\nLimite de passageiro:${veiculo.limitePassageiros}\nVelocidade atual:${veiculo.velocidade}km/h\nPassageiros:${veiculo.passageiros.join(', ')}\n\nEscolha uma opção.\n1.aumentar velocidade.\n2.Diminuir velocidade.\n3.Adicionar passageiro.\n4.Sair.`)
}

while(true){
    const escolha = mostrarMenu()

    switch(escolha){
        case "1":
            const aceleracao = parseFloat(prompt('Digite a quantidade de aceleração:'))
            veiculo.aumentarVelocidade(aceleracao)
            break
        case "2":
            const desaceleracao = parseFloat(prompt('Digite a quantidade de desaceleração:'))
            veiculo.diminuirVelocidade(desaceleracao)
            break
        case "3":
            const nomePassageiro = prompt('Digite o nome do passageiro:')
            veiculo.adicionarPassageiro(nomePassageiro)
            break
        case "4":
            alert('Saindo...')
            break
        default:
            alert('Opção inválida, tente novamente.')
    }
    if(escolha === "4"){
        break
    }
}