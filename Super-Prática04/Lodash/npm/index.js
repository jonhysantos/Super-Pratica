// Importamos o lodash com um nome customizado.
import _ from 'lodash'

// Executa a função Kebabcase.
let frase = 'Aninha é o meu porco.'
let fraseKebabCase = _.kebabCase(frase)
console.log(fraseKebabCase)

frase = "Aninha era o meu porco, agora ela é o meu porcão."
fraseKebabCase = _.kebabCase(frase)
console.log(fraseKebabCase)