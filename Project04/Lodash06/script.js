import _ from 'lodash'

const frase = 'Hoje aprendi a relaxar'
const Kebab = _.kebabCase(frase)
const frase2 = 'Com musica no youtube'
const Kebab2 = _.kebabCase(frase2)
console.log(frase,frase2)
console.log(Kebab,Kebab2)