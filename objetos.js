let pessoa = {
    nome: 'Jonhy',
    idade: 35,
    endereço: {
        Av: 'Atlântica',
        número: '1376',
        CEP: '11442070'
    },
    ola: function(){
        alert(`Olá,mundo!, aqui é ${this.nome}`)
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.endereço)
console.log(pessoa.endereço.Av)

pessoa.nome = "Ana"
pessoa.tel = '13997936353'
console.log(pessoa)
pessoa.ola()
pessoa.nome = 'Jonhy'
pessoa.ola()

let calculadora = {
    x: 5,
    y: 10,
    somar: function(){
        alert(this.x + this.y)
    }
}
calculadora.somar()
calculadora.x = 50
calculadora.somar()