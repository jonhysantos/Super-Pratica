function toKebabCase(str){
    return str.split(" ").join("-").toLowerCase()
}

function removerLi(id){
    const liParaRemover = document.getElementById('id')
    liParaRemover.remove()
}

function adicionarLi(jogo){
    const liElement = document.createElement('li')
    liElement.id = toKebabCase(jogo.nome)
    liElement.textContent = `Nome:${jogo.nome} Genero:${jogo.genero} Ano ${jogo.ano} `
    document.getElementById("listaDeJogos").appendChild(liElement)
}

const form = document.getElementById("cadastrarJogo")

form.addEventListener('submit',function (evento){
    evento.preventDefault()
    const inputNome = document.getElementById('nome')
    const inputAno = document.querySelector('#ano')
    const inputGenero = document.getElementById('genero')

    const jogo = {}

    jogo.none = inputNome.value
    jogo.ano = inputAno.value
    jogo.genero = inputGenero.value

    adicionarLi(jogo)
})