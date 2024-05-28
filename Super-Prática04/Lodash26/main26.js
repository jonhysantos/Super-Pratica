import _ from 'lodash'

let frase = `Revisando tudo`
let kebabFrase = _.kebabCase(frase)

console.log(kebabFrase)

frase = `Revisando as super-Práticas`
kebabFrase = _.kebabCase(frase)

console.log(kebabFrase)