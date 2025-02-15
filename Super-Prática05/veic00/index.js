const vehicle = {
    model:'Carro',
    passengers: [],
    limitPassengers: 5,
    velocity: 0,
    raiseVelocity:function(acelerate){
        this.velocity += acelerate
        alert(`A velocidade foi aumentada para ${this.velocity} km/h `)
    },
    lessVelocity:function(desacelerate){
        if(this.velocity - desacelerate >= 0){
            this.velocity -= desacelerate
            alert(`A velocidade foi diminuida para ${this.velocity} km/h`)
        }else{
            this.velocity = 0
            alert('O veículo está parado')
        }
    },
    addPassengers:function(person){
        if(this.velocity === 0 && this.passengers.length < this.limitPassengers ){
            this.passengers.push(person)
            alert(`${person} foi adicionado(a) como passagiero(a)`)
        }else if(this.velocity > 0 ){
            alert(`Não é possível adicionar passageiros com o veiculo em movimento.`)
        }else{
            alert('Limite de passageros atingido')
        }
    }

}

function showMenu(){
    return prompt(`Modelo: ${vehicle.model}.\nPassageiros: ${vehicle.passengers.join(', ')}.\nLimite de passageiros: ${vehicle.limitPassengers}.\nVelocidade atual: ${vehicle.velocity} km/h\nEscolha uma opção:\n1.Aumentar velocidade.\n2.Diminuir velocidade.\n3.Adicionar passageiros.\n4.Sair`)
}

while(true){
    const choice = showMenu()
    switch(choice){
        case "1":
            const acelerate = parseFloat(prompt('Digite a quantidade de aceleração:'))
            vehicle.raiseVelocity(acelerate)
            break
        case "2":
            const desacelerate = parseFloat(prompt('Digite quanto diminuir:'))
            vehicle.lessVelocity(desacelerate)
            break
        case "3":
            const person = prompt('Digite o nome do passageiro(a)')
            vehicle.addPassengers(person)
            break
        case "4":
            alert('Saindo...')
            break
        default:
            alert(`Opção inválida`)
    }
    if(choice === "4"){
        break
    }
}

