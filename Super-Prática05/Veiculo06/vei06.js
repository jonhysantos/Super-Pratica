const veiculo = {
    modelo:'Carro',
    passageiros: [],
    limitePassageiros: 5,
    velocidade: 0,
    aumentarVelocidade:function(aceleracao){
        this.velocidade += aceleracao
        alert(`Velocidade aumentada para ${this.velocidade} km/h.`)
    },
    diminuirVelocidade:function(desaceleracao){
        if(this.velocidade - desaceleracao >= 0 ){
            this.velocidade -= desaceleracao
            alert(`A velocidade foi diminuida para ${this.velocidade}km/h`)
        }else{
            this.velocidade = 0
            alert('O veículo está parado.')
        }
    },
    adicionarPassageiros:function(nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiros ){
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} foi adicionado como passageiro.`)
        }else if(this.velocidade > 0){
            alert('Não é possível adicionar passageiros com o veículo em movimento.')
        }else{
            alert('Limite de passageiros atingido.')
        }
    },

}

function mostrarMenu(){
    return prompt(`Veículo: ${veiculo.modelo}.\nlimite de passageiros: ${veiculo.limitePassageiros}.\nVelocidade atula: ${veiculo.velocidade} km/h.\nPassageiros: ${veiculo.passageiros.join(', ')}.\n\nEscolha uma opção: \n1.Aumentar velocidade.\n2.Diminuir velocidade.\n3.Adicionar passageiros.\n4.Sair.`)
}

while(true){
    let escolha = mostrarMenu()

    switch(escolha){
        case "1":
            const aceleracao = parseInt(prompt('Digite a quantidade da aceleração que deseja aumentar: '))
            veiculo.aumentarVelocidade(aceleracao)
            break
        case "2":
            const desaceleracao = parseInt(prompt('Digite a quantidade de desaceleração que deseja diminuir: '))
            veiculo.diminuirVelocidade(desaceleracao)
            break
        case "3":
            const nomePassageiro = prompt('Digite o nome do passageiro:')
            veiculo.adicionarPassageiros(nomePassageiro)
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