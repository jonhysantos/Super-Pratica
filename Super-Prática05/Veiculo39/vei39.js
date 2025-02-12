const veiculo = {
    modelo:'Carro',
    passageiros:[],
    limitePassageiros:5,
    velocidade:0,
    aumentarVelocidade:function(aceleracao){
        this.velocidade += aceleracao
        alert(`Velocidade aumentada para ${this.velocidade} km/h`)
    },
    diminuirVelocidade:function(desaceleracao){
        if(this.velocidade - desaceleracao >= 0){
            this.velocidade -= desaceleracao
            alert(`Velocidade diminuida para ${this.velocidade} km/h`)
        }else{
            this.velocidade = 0
            alert('O veículo está parado')
        }
    },
    adicionarPassageiros:function(nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiros){
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} foi adicionado como passageiro`)
        }else if(this.velocidade > 0){
            alert(`Não é possível adicionar passageiros com o veiculo em movimento!`)

        }else{
            alert('limite de passageiros atingido')
        }
    },
}

function showMenu(){
    return prompt(`Veiculo:${veiculo.modelo}\nLimite de passageiros:${veiculo.limitePassageiros}.\nVelocidade atual:${veiculo.velocidade} km/h\nPassageiros:${veiculo.passageiros.join(', ')}\n\n Escolha uma opção\n1.Aumentar velocidade.\n2.Diminuir velocidade.\n3.Adicionar passageiros.\n4.Sair`)
}

while(true){
    const escolha = showMenu()
    switch(escolha){
        case "1":
            const aceleracao = parseFloat(prompt('Digite a quantidade de velocidade que deseja aumentar:'))
            veiculo.aumentarVelocidade(aceleracao)
            break
        case "2":
            const desaceleracao = parseFloat(prompt('Digite a quantidade de desaceleração:'))
            veiculo.diminuirVelocidade(desaceleracao)
            break
        case "3":
            const nomePassageiro = prompt('Digite o nome do passageiro que deseja adicionar:')
            veiculo.adicionarPassageiros(nomePassageiro)
            break
        case "4":
            alert('Saindo....')
            break
        default:
            alert('Opção inválida,tente novamente')
    }
    if(escolha === "4"){
    break
}
}

