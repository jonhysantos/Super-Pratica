import _ from "lodash"

let frase = `hoje irei pro santa rosa.`
let fraseKebab = _.kebabCase(frase);

console.log(fraseKebab);

frase = `depois ir pra santos`;
fraseKebab = _.kebabCase(frase);

console.log(fraseKebab);