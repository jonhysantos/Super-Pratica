import _ from 'lodash'

let frase = `Revisando tudo`;
let fraseKebab = _.kebabCase(frase)
console.log(fraseKebab);

frase = 'antes de avançar'
fraseKebab = _.kebabCase(frase);
console.log(fraseKebab)