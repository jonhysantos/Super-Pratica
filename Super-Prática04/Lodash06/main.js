import _ from 'lodash'

let frase = 'Apredendo sobre Lodash'
let fraseKebabCase = _.kebabCase(frase)

console.log(fraseKebabCase)

frase = 'Apredendo tambem sobre o npm'
fraseKebabCase = _.kebabCase(frase)

console.log(fraseKebabCase)