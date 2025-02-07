import _ from 'lodash'

const frase = 'Realmente o foco muda'
const fraseKebab = _.kebabCase(frase)
console.log(fraseKebab)

const frase2 = 'Quando vc trabalha ou se ocupa'
const fraseKebab2 = _.kebabCase(frase2)
console.log(fraseKebab2)