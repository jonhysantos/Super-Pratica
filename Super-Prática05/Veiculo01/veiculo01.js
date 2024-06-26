const veiculo = {
    modelo: 'carro',
    passageiros: [],
    limitePassageiros: 5,
    velocidade: 0,
    aumentarVelocidade: function (aceleracao){
        this.velocidade += aceleracao
        window.alert(`Velocidade aumentada para ${this.velocidade} km/h`)
    },
    diminuirVelocidade: function (desaceleracao){
        if(this.velocidade - desaceleracao >= 0 ){
            this.velocidade -= desaceleracao
            window.alert(`Velocidade diminuida para ${this.velocidade} km/h`)
        }else{
            this.velocidade = 0
            window.alert('O veículo está parado.')
        }
    },
    adicionarPassageiro: function (nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiros){
            this.passageiros.push(nomePassageiro)
            window.alert(`${nomePassageiro} foi adicionado como passageiro.`)
        }else if(this.velocidade > 0){
            window.alert('Não é possível adicionar passageiros com o veículo em movimento.')
        }else{
            window.alert('Limite de passageiros atingido.')
        }
    },
}

function mostrarMenu() {
    return prompt(`Veículo: ${veiculo.modelo}\nLimite de passageiros: ${veiculo.limitePassageiros}\nVelocidade atual ${veiculo.velocidade}km/h\nPassageiros: ${veiculo.passageiros.join(', ')}\n\nEscolha uma opção\n 1.Aumentar velocidade\n 2.Diminuir velocidade\n 3.Adicionar passageiro\n 4.Sair.`)
}

while(true){
    const escolha = mostrarMenu()

    switch(escolha){
        case '1':
            const aceleracao = parseFloat(prompt('Digite a quantidade de aceleração:'))
            veiculo.aumentarVelocidade(aceleracao)
            break
        case '2':
            const desaceleracao = parseFloat(prompt('Digite a quantidade de desaceleração:'))
            veiculo.diminuirVelocidade(desaceleracao)

            break
        case '3':
            const nomePassageiro = prompt('Digite o nome do passageiro:')
            veiculo.adicionarPassageiro(nomePassageiro)
            break
        case '4':
            alert('Saindo.....')
            break
        default:
            window.alert('Opcão inválida. Tente novamente.')
    }
    if(escolha === '4'){
        break
    }
}