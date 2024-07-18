import _ from 'lodash'

let frase = "comprar o curso do felipe dechamps"
let fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)

frase = "Já me decidi o investimento"
fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)