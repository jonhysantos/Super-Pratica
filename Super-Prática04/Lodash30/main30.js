import _  from "lodash"

let frase = 'praticando tudo ate aqui'
let fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)

frase = 'De super 06 ao 04 pratica'
fraseKebab = _.kebabCase(frase)

console.log(fraseKebab)