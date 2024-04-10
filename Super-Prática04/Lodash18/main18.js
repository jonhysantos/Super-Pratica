import _ from 'lodash'

let frase = 'hoje vi sobre as promises'
let kebab = _.kebabCase(frase)

console.log(kebab)

frase = "Vi tambem sobre a assincronidade."
kebab = _.kebabCase(frase)

console.log(kebab)