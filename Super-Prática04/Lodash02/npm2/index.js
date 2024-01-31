// Importamos a biblioteca lodash.
import _ from 'lodash'

// Executa a função KebabCase
let frase = "Aprendendo npm"
let fraseKebabCase = _.kebabCase(frase)
console.log(fraseKebabCase)

frase = 'Agora colocamos pra rodar no node'
fraseKebabCase = _.kebabCase(frase)
console.log(fraseKebabCase)