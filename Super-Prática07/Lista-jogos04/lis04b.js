function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function adicionarli(jogo){
    const liElement = document.createElement('li');
    liElement.id = toKebabCase(jogo.nome);
    liElement.innerHTML = `Nome: ${jogo.nome} <br> Ano de lançamento: ${jogo.ano} <br> Genero: ${jogo.genero}`

    document.getElementById('cadastroDeJogos').appendChild(liElement);
}
const form = document.getElementById('formJogos');
form.addEventListener('submit',function(evento){
    evento.preventDefault();

    const inputNome = document.getElementById('inputNome');
    const inputAno = document.getElementById('inputAno');
    const inputGenero = document.getElementById('inputGenero');

    const jogo = {};

    jogo.nome = inputNome.value;
    jogo.ano = Number(inputAno.value);
    jogo.genero = inputGenero.value;

    adicionarli(jogo);

    evento.target.reset()
})
