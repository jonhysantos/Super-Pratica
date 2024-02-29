import _  from 'lodash'

let frase = 'Aprendendo sobre o lodash'
let kebabCase = _.kebabCase(frase)

console.log(kebabCase)

frase = 'Aprendendo sobre a função kebabCase'
kebabCase = _.kebabCase(frase)

console.log(kebabCase)