const vehicle = {
    model:'Carro',
    passengers: [],
    limitPassengers: 5,
    velocity: 0,
    raiseVelocity:function(acelerate){
        this.velocity += acelerate
        alert(`A velocidade foi aumenta para ${this.velocity} km/h`)
    },
    lessVelocity:function(desacelerate){
        if(this.velocity - desacelerate >= 0){
            this.velocity -= desacelerate
            alert(`A velocidade foi aumentada para ${this.velocity} km/h`)
        }else{
            this.velocity = 0
            alert('O veiculo está parado')
        }
    },
    addPassengers:function(person){
        if(this.velocity === 0 && this.passengers.length < this.limitPassengers){
            this.passengers.push(person)
            alert(`${person} foi adicionado como passageiro.`)
        }else if(this.velocity > 0){
            alert('Não é possivel adicionar passageiros com o veiculo em movimento.')
        }else{
            alert('limite de passageiros atingido')
        }
    }
}

function showMenu(){
    return prompt(`Modelo: ${vehicle.model}.\nPassageiros: ${vehicle.passengers.join(', ')}.\nVelocidade atual: ${vehicle.velocity} km/h.\nEscolha uma opção:\n1.Aumentar velocidade.\n2.Diminuir velocidade.\n3.Adicionar passageiros.\n4.Sair`)
}

while(true){
    const choice = showMenu()
    switch(choice){
        case "1":
            const acelerate = parseFloat(prompt('Digite a velocidade:'))
            vehicle.raiseVelocity(acelerate)
            break
        case "2":
            const desacelerate = parseFloat(prompt('Digite a velocidade que deseja diminuir:'))
            vehicle.lessVelocity(desacelerate)
            break
        case "3":
            const person = prompt('Digite o nome do passageiro:')
            vehicle.addPassengers(person)
            break
        case "4":
            alert('Sair')
            break
        default:
            alert(`Opção inválida`)
    }

    if(choice === "4"){
        break
    }
}