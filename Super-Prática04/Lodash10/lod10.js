import _ from 'lodash'

let frase = 'Aninha no mágic city'
let fraseKebabCase = _.kebabCase(frase)

console.log(fraseKebabCase)

frase = 'aninha sereia'
fraseKebabCase = _.kebabCase(frase)

console.log(fraseKebabCase)