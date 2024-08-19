function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function adicionarLi(jogo){
    const liElment = document.createElement('li');
    liElment.id = toKebabCase(jogo.nome);
    liElment.innerHTML = `Nome: ${jogo.nome} <br> Ano de lançamento: ${jogo.ano} <br> Gênero: ${jogo.genero}`

    document.getElementById('ulElement').appendChild(liElment)
}

const form = document.getElementById('cadastroJogos');
form.addEventListener('submit',function(event){
    event.preventDefault();

    const inputNome = document.getElementById('inputNome');
    const inputAno = document.getElementById('inputAno');
    const inputGenero = document.getElementById('inputGenero');

    const jogo = {}

    jogo.nome = inputNome.value;
    jogo.ano = Number(inputAno.value);
    jogo.genero = inputGenero.value;

    adicionarLi(jogo);

    event.target.reset()
})