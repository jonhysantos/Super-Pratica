import _ from 'lodash'
let frase = 'Revisei todos os exercícios'
let Case = _.kebabCase(frase)

console.log(Case)

frase = 'Revisei e consegui fazer todos sem olhar'
Case = _.kebabCase(frase)

console.log(Case)