import _ from 'lodash'

let frase = 'É só mudar o foco'
console.log(frase)
let fraseKebab = _.kebabCase(frase)
console.log(fraseKebab)

frase = "Mudando o foco vc não fica obssecado"
console.log(frase)
fraseKebab = _.kebabCase(frase)
console.log(fraseKebab)

