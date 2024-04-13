import _ from 'lodash'

let frase = 'consegui fazer sozinho o projeto veiculo'
let kebab = _.kebabCase(frase)

console.log(kebab)

frase = 'me confundir um pouco'
kebab = _.kebabCase(frase)

console.log(kebab)