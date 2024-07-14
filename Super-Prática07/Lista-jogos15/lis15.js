function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function adicionarLi(jogo){
    const liElement = document.createElement('li');
    liElement.id = toKebabCase(jogo.nome);
    liElement.textContentL = `Nome: ${jogo.nome} <br> Ano de lançamento: ${jogo.ano} <br> Gênero: ${jogo.genero}`
    document.getElementById('ulElement').appendChild(liElement)
}

const form = document.getElementById('cadastroJogos')

form.addEventListener('submit',function(evento){
    evento.preventDefault()
    const inputNome = document.getElementById('inputNome');
    const inputAno = document.getElementById('inputAno');
    const inputGenero = document.getElementById('inputGenero');

    const jogo = {}

    jogo.nome = inputNome.value
    jogo.ano = inputAno.value
    jogo.genero = inputGenero.value

    adicionarLi(jogo)
    
    evento.target.reset()
})