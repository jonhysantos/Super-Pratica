import _ from 'lodash'

let frase = 'Gratidão a Deus.'
let fraseKebab = _.kebabCase(frase)
console.log(fraseKebab)

frase = 'Deus é maior que tudo.'
fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)
