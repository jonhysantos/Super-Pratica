const vehicle = {
    model:'Carro',
    passengers:[],
    limitPassengers:5,
    velocity:0,
    addVelocity:function(acel){
        this.velocity += acel
        alert(`A velocidade foi aumentada para ${this.velocity}km/h`)
    },
    lessVelocity:function(desa){
        if(this.velocity - desa > 0){
            this.velocity -= desa
            alert(`A velicdade foi diminuída pra ${this.velocity}km/h`)
        }else{
            this.velocity = 0
            alert('O veiculo esta parado')
        }
    },
    addPassengers:function(person){
        if(this.velocity === 0 && this.passengers.length < this.limitPassengers){
            this.passengers.push(person)
            alert(`${person} foi adiconado(a) como passageiro(a)`)
        }else if(this.velocity > 0){
            alert('Não é possível adicionar passageiros com o veiculo em movimento.')
        }else{
            alert('Limite de passageiros atingido ')
        }
    }
}

let choice 

do{
    choice = prompt(`Modelo:${vehicle.model}.\nPassageiros:${vehicle.passengers.join(', ')}.\nVelocidade atual:${vehicle.velocity}km/h\nLimite de passageiros:${vehicle.limitPassengers}\nEscolha uma opção:1.aumentar velocidade.\n2.diminuir velocidade.\n3.Adicionar passageiros\n4.Sair`)

    switch(choice){
        case "1":
            const acel = parseFloat(prompt('Digite a quantidade de aceleração:'))
            vehicle.addVelocity(acel);
            break
        case "2":
            const desa = parseFloat(prompt('Digite a quantidade de desaceleração:'))
            vehicle.lessVelocity(desa)
            break
        case "3":
            const person = prompt('Digite o nome do passageiro(a)')
            vehicle.addPassengers(person)
            break
        case '4':
            alert('Saindo...');
            break
        default:
            alert('Opção invalida')
    }
}while(choice !== "4")