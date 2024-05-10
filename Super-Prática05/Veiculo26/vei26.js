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
        if(this.velocidade - desaceleracao >= 0 ){
            this.velocidade -= desaceleracao
            alert(`A velocidade foi diminuída para ${this.velocidade} km/h`)
        }else{
            this.velocidade = 0
            alert(`O veículo está parado.`)
        }
    },
    adicionarPassageiros:function(nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitePassageiros){
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} foi adicionado como passageiro.`)

        }else if(this.velocidade > 0){
            alert('Não é possível adicionar passageiros com o veículo em movimento.')

        }else{
            alert(`Limite de passageiros atingido.`)
        }
    },
    excluirPassageiro:function(nomePassageiroExcluido){
        if(isNaN(indice) || indice < 0 || indice >= estoque.length){
            alert(`Número inválido.`)
            return
        }
        const nomeItemExcluido = this.passageiros[indice]
        estoque.splice(indice,1)
        alert(`"${nomeItemExcluido}" Passageiro exlcuído do veiculo.`)
    }


}

function mostrarMenu(){
    return prompt(`Modelo: ${veiculo.modelo}.\nLimite de passageiros: ${veiculo.limitePassageiros}.\nVelocidade atual: ${veiculo.velocidade} km/h.\nPassageiros: ${veiculo.passageiros.join(', ')}\nEscolha uma opção:\n\n1.Aumentar velocidade.\n2Diminuir velocidade.\n3.Adicionar passageiros.\n4.sair`)
}


let escolha 

while(true){
    
    escolha = mostrarMenu()

    switch(escolha){
        case "1":
            const aceleracao = parseInt(prompt(`Digite a quantidade de aceleração que deseja aumentar:`))
            veiculo.aumentarVelocidade(aceleracao)
            break
        case "2":
            const desaceleracao = parseInt(prompt('Digite a quantidade de desaceleração:'))
            veiculo.diminuirVelocidade(desaceleracao)
            break
        case "3":
            const nomePassageiro = prompt('Digite o nome do passageiro:')
            veiculo.adicionarPassageiros(nomePassageiro)
            break
        case "5":
            alert(`Saindo...`)
            break
        case "4":
            const indice = parseInt(prompt(`Digite o número do passageiro a se excluído:`)) -1
            veiculo.excluirPassageiro(nomePassageiroExcluido)
            break
        default:
            alert('Opção inválida,tente novamente.')
    }

    if(escolha === "4"){
        break
    }
}