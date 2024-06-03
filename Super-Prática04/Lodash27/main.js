import _ from "lodash"

let frase = 'Praticando tudo (super-Pratica06 ao 03'
let fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)

frase = 'praticando a biblioteca lodash'
fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)