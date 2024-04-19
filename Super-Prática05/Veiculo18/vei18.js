const veiculo = {
    modelo:'carro',
    passageiros: [],
    limitePassageiros: 5,
    velocidade: 0,
    aumentarVelocidade:function(aceleracao){
        this.velocidade += aceleracao
        alert(`A velocidade foi aumentada para ${this.velocidade} km/h`)
    },
    diminuirVelocidade:function(desaceleracao){
        if(this.velocidade - desaceleracao >= 0){
            this.velocidade -= desaceleracao
            alert(`A velocidade foi diminuída para ${this.velocidade}`)
        }else{
            this.velocidade = 0
            alert('O veículo está parado.')
        }
    },
    adicionarPassageiro:function(nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiros){
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
    return prompt(`Modelo: ${veiculo.modelo}.\nLimite de passageiros: ${veiculo.limitePassageiros}.\nVelocidade atual: ${veiculo.velocidade} km/h.\nPassageiros: ${veiculo.passageiros.join(', ')}.\nEscolha uma opção:\n1.Aumentar velocidade.\n2.Diminuir velocidade.\n3.Adicionar passageiro.\n4.Sair`)
}

while(true){
    let escolha = mostrarMenu()

    switch(escolha){
        case "1":
            const aceleracao = parseFloat(prompt('Digite a quantidad de velocidade que deseja aumentar:'))
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
            alert('Opção inválida,tente novamente.')
    }
    if(escolha === "4"){
        break
    }
}