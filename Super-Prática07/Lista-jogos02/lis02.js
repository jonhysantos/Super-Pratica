function toKebabCase(str){
    return str.split(" ").join("-").toLowerCase()
}

function adicionarLi(jogo){
    const liElement = document.createElement('li');
    liElement.id = toKebabCase(jogo.nome)
    liElement.innerHTML =  `Nome: ${jogo.nome} <br> ano de lançamento: ${jogo.ano} <br> Gênero: ${jogo.Genero}`

    document.getElementById('listaDeJogos').appendChild(liElement)
}

const form = document.getElementById('cadastrarJogo')

form.addEventListener("submit", function(evento){
    evento.preventDefault()

    const inputNome = document.getElementById('inputNome')
    const inputAno = document.getElementById('inputAno')
    const inputGenero = document.getElementById('inputGenero')

    const jogo = {}

    jogo.nome = inputNome.value
    jogo.ano = inputAno.value
    jogo.Genero = inputGenero.value

    adicionarLi(jogo)

    evento.target.reset()
})