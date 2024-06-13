const veiculo = {
    modelo:'carro',
    passageiros:[],
    limitePassageiros: 5,
    velocidade: 0,
    aumentarVelocidade:function(aceleracao){
        velocidade += aceleracao
        alert(`A velocidade foi aumentada para ${velocidade}`)
    }
}