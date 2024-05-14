import _ from 'lodash'

let frase = 'Aprendi a adicionar filmes'
let kebabFrase = _.kebabCase(frase)

console.log(kebabFrase)

frase = 'Adicionando filmes'
kebabFrase = _.kebabCase(frase)

console.log(kebabFrase)