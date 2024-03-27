import _ from 'lodash'
let frase = 'Só musicas romanticas de madrugada'
let frasek = _.kebabCase(frase)

console.log(frasek)

frase = 'O melhor do mundo'
frasek = _.kebabCase(frase)
console.log(frasek)

