// Importamos a bibliotéca lodash.
import _ from 'lodash'

let frase = 'Aprendendo sobre npm.'
let kebabCase = _.kebabCase(frase)
console.log(kebabCase)

frase = 'Aprendendo sobre a bibliotéca, kebabCase.'
kebabCase = _.kebabCase(frase)

console.log(kebabCase)