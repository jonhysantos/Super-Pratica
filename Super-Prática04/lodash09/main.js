import _ from 'lodash'

let frase = 'Domingo vamos para o Magic city'
let fraseKebabCase = _.kebabCase(frase)

console.log(frase,fraseKebabCase)

frase = 'Domingo vamos para o Magic city eu e Aninha'
fraseKebabCase = _.kebabCase(frase)

console.log(frase,fraseKebabCase)