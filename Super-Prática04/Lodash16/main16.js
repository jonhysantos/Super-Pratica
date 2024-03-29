import _ from 'lodash'

let frase = 'Hoje grande progresso'
let fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)

frase = 'Resolvi um problema de programação'
fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)