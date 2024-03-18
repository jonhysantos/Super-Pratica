import _ from "lodash"

let frase = 'Ana está na didinha'
let kebabCase = _.kebabCase(frase)

console.log(kebabCase)

frase = 'Ana volta na terça'
kebabCase = _.kebabCase(frase)
console.log(kebabCase)