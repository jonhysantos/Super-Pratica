import _ from "lodash"

let frase = `Revisando tudo`
let fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)

frase = "apromorando a pratica"
fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)