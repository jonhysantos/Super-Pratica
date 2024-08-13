import _ from 'lodash'

let frase = 'refazendo as tarefas';
let fraseKebabCase = _.kebabCase(frase);

console.log(fraseKebabCase);

frase = 'Do super pratica07 ao 01';
fraseKebabCase = _.kebabCase(frase);

console.log(fraseKebabCase)