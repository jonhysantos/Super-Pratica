import _ from 'lodash'

let frase = 'Kiara na cadeira'
let fraseKebabCase = _.kebabCase(frase)

console.log(fraseKebabCase)

frase = 'Kiara dormindo na cadeira'
fraseKebabCase = _.kebabCase(frase)

console.log(fraseKebabCase)