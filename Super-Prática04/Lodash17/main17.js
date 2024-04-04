import _ from 'lodash'

let frase = 'Avançando nos estudos.'

let fraseKebabCase = _.kebabCase(frase)

console.log(fraseKebabCase)

frase = 'Procurando meu primeiro freelancer'

fraseKebabCase = _.kebabCase(frase)

console.log(fraseKebabCase)