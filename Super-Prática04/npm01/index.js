// Importamos a função lodash. 
import _ from 'lodash'

// Colocamos as variáveis.
let frase = "Aprendendo sobre npm"
let kebabCase = _.kebabCase(frase)
console.log(kebabCase)

frase = 'Aprendendo sobre a bibliotéca lodash.'
kebabCase = _.kebabCase(frase)
console.log(kebabCase)