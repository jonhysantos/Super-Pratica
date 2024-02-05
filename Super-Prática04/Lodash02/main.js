// Importamos a função lodash da bibliotéca do npm
import _ from 'lodash'

// Pegamos as frases.
let frase = 'Aprendendo sobre npm.'
let kebabCase = _.kebabCase(frase)

console.log(kebabCase)

frase = 'Aprendendo sobre a bibliotéca lodash.'
kebabCase = _.kebabCase(frase)

console.log(kebabCase)
