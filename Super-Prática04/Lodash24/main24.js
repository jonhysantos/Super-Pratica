import _ from 'lodash'

let frase = 'Semana abençoada'
let fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)

frase = 'Ir no cartorio cadastrar biometria'
fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)