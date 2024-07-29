import _ from 'lodash'

let frase = 'Rolando as Olimpíadas'
let fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)

frase = 'Rayssa levou a medalha de Bronze'
fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)