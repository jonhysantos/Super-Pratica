const vehicle = {
  model: "Carro",
  passengers: [],
  velocity: 0,
  limitPassengers: 5,
  addVelocity: function (ace) {
    this.velocity += ace;
    alert(`A velocidade foi aumentada para ${this.velocity} km/h`);
  },
  lessVelocity: function (desa) {
    if (this.velocity - desa > 0) {
      this.velocity -= desa;
      alert(`A velocidade foi diminuida para ${this.velocity} km/h`);
    } else {
      this.velocity = 0;
      alert("O veiculo esta parado");
    }
  },
  addPassengers: function (person) {
    if ( this.velocity === 0 && this.passengers.length <= this.limitPassengers) {
      this.passengers.push(person);
      alert(`${person} foi adicionado como passageiro`)
    }else if(this.velocity > 0 ){
        alert('Veiculo em movimento')
    }else{
        alert('Limite de passageiros atingido')
    }
  },
}

let choice 

while(true){
    choice = prompt(`Modelo: ${vehicle.model}.\nPassageiros: ${vehicle.passengers.join(', ')} \nVelocidade atual: ${vehicle.velocity} km/h \n Limite de passageiros: ${vehicle.limitPassengers}`)

    switch(choice){
        case "1":
            const ace = parseFloat(prompt('Digite a aceleração:'))
            vehicle.addVelocity(ace)
            break
        case "2":
            const desa = parseFloat(prompt('Digite a quantidade de desaceleração:'))
            vehicle.lessVelocity(desa)
            break
        case "3":
            const person = prompt('Digite o nome do passageiro:')
            vehicle.addPassengers(person)
            break
        case "4":
            alert('Saindo...');
            break
        default:
            alert('Opção invalida')
    }

    if(choice === "4"){
        break
    }
}
