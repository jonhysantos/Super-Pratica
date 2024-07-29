const veiculo = {
    modelo: "carro",
    limitePassageiro: 5,
    velocidade: 0,
    passageiros: [],
    aumentarVelocidade:function(aceleracao){
        this.velocidade += aceleracao
        alert(`Velocidade aumentada para ${this.velocidade} km/h`)
    },
    diminuirVelocidade:function(desaceleracao){
        if(this.velocidade - desaceleracao > 0){
            this.velocidade -= desaceleracao
            alert(`A velocidade foi diminuída para ${this.velocidade} km/h`)
        }else{
            this.velocidade = 0
            alert(`O veículo está parado`)
        }
    },
    adicionarPassageiros:function(nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiro){
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} foi adicionado como passageiro.`)
        }else if(this.velocidade > 0 ){
            alert('Não é possível adicionar passageiro com o veículo em movimento.')
        }else{
            alert(`Limite de passageiros atingido.`)
        }
    },
}

let escolha 

do{
    escolha = prompt(`Modelo: ${veiculo.modelo}\nVelocidade: ${veiculo.velocidade}\nLimite de passageiros: ${veiculo.limitePassageiro}\n Passageiros: ${veiculo.passageiros.join(', ')}\n\n Escolha uma opção:\n 1.Aumentar velocidade\n2.Diminuir velocidade \n 3.Adicionar passageiro \n4.Sair`)

    switch(escolha){
        case "1":
            const aceleracao = parseInt(prompt('Digite a quantidade de aceleração:'))
            veiculo.aumentarVelocidade(aceleracao)
            break
        case "2":
            const desaceleracao = parseInt(prompt('Digite a quantidade de desacelração:'))
            veiculo.diminuirVelocidade(desaceleracao)
            break
        case "3":
            const nomePassageiro = prompt('Digite o nome do passageiro:')
            veiculo.adicionarPassageiros(nomePassageiro)
            break
        case "4":
            alert(`Saindo...`)
            break
        default:
            alert(`Opção inválida`)

    }
    if(escolha === "4"){
        break
    }

}while(escolha !== "5")