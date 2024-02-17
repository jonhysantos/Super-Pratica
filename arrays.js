/**
 *
let lista = ['Laranja','Banana','Abacaxi','Abacati']

console.log(lista[3])

lista[1] = 'Maracujá' // alterou
console.log(lista)
lista.push('Maçã')
console.log(lista)
lista.pop()
console.log(lista)
lista.shift()
console.log(lista)
lista.unshift('Laranja')
console.log(lista)

let numeros = [1,2,5,4,7,9,10]

lista.concat(numeros) // inultavel
let novoArray = lista.concat(numeros)
console.log(lista)
console.log(numeros)
console.log(novoArray)

let novoArray2 = novoArray.join(' => ')
console.log(novoArray2)

let resultado = novoArray2.split('')
console.log(resultado)

let lista2 = ['Limão','Banana','Melão']

let slice = lista2.splice(0,2)
console.log(slice)

lista2.splice(2,2,'Pessego')
console.log(lista2)


let numeros = [10,3,6,4,32,9]
numeros.forEach(function (elementoAtual,indiceAtual,arrayCompleto) {
    console.log(`O elemento no indice ${indiceAtual} é ${elementoAtual} e o array completo é ${arrayCompleto}`)
})
*/

const numeros = [2,5,4,8,6,9,10,12,7,5,3]
const pares = numeros.filter(function (elementoAtual){
    return elementoAtual %2 == 0
})

console.log(numeros,pares)
