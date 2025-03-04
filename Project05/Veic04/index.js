const vehicle = {
    model:'Carro',
    passengers:[],
    velocity: 0,
    limitPassengers: 5,
    addVelocity:function(acelerate){
        this.velocity += acelerate
        alert(`A velocidade foi aumentada para ${this.velocity} km/h`)

    },
    lessVelocity:function(desacelerate){
        if(this.velocity - desacelerate > 0){
            this.velocity -= desacelerate
            alert(`A velocidade foi diminuida para ${this.velocity} km/h`)
        }else{
            this.velocity = 0
            alert('O veículo está parado')
        }
    },
    addPassenger:function(person){
        if(this.velocity === 0 && this.passengers.length < this.limitPassengers){
            this.passengers.push(person)
            alert(`${person} foi adicionado.`)
        }else if(this.velocity > 0){
            alert('Não é possível adicionar passageiros com o veículo em movimento.')
        }else{
            alert('Limite de passageiros atingido')
        }
    }
}

function seeMenu(){
    return prompt(`Modelo: ${vehicle.model}.\nPassageiros: ${vehicle.passengers.join(', ')}\nVelocidade atual: ${vehicle.velocity} km/h \n Limite de passageiros: ${vehicle.limitPassengers}\n Escolha uma opção:\n1.Aumentar a velocidade.\n2.Diminuir a velocidade.\n3.Adicionar passageiros.\n4.sair`)
}

while(true){
    const choice = seeMenu()
    switch(choice){
        case '1':
            const acelerate = parseFloat(prompt('Digite a quantidade de aceleração:'))
            vehicle.addVelocity(acelerate)
            break
        case '2':
            const desacelerate = parseFloat(prompt('Digite quanto deseja diminuir a velocidade:'))
            vehicle.lessVelocity(desacelerate)
            break
        case '3':
            const person = prompt('Digite o nome do passagiero(a);')
            vehicle.addPassenger(person)
            break
        case '4':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida')
    }

    if(choice === '4'){
        break
    }
}