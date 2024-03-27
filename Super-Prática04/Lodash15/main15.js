import _ from 'lodash'

let frase = 'Acordei as 06:00 da manhã'
let fraseK = _.kebabCase(frase)

console.log(fraseK)

frase = 'Acordei as 06:00 da manhã e fiz cardio'
fraseK = _.kebabCase(frase)

console.log(fraseK)