import _ from 'lodash'

let frase = 'hoje inicia um novo ciclo'
let kebabCase = _.kebabCase(frase)

console.log(kebabCase)

frase = 'Sim! eu irei me tornar um programador.'
kebabCase = _.kebabCase(frase)

console.log(kebabCase)