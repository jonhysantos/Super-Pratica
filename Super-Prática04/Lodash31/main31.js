import _ from "lodash"

let frase = 'praticando tudo ate aqui'

let fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)

frase = 'A meta e fazer tudo'

fraseKebab = _.kebabCase(frase)
console.log(fraseKebab)

