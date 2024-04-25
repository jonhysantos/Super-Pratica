function toKebabCase(str){
    return str.split(" ").join('-').toLocaleLowerCase()
}

function removerLi(id){
    const liParaRemover = document.getElementById(id)
    liParaRemover.remove()
}

function adicionarLi(){
    const jogo = prompt('Insira o nome do jogo que você deseja adiconar a lista.')
    const ulElement = document.getElementById('listaDeJogos')
    const liElement = document.createElement('li')
    liElement.innerHTML = jogo
    liElement.id = toKebabCase(jogo)
    const btnRemover = document.createElement('button')
    btnRemover.innerText = "Remover jogo"
    btnRemover.addEventListener('click',function(){
        removerLi(liElement.id)
    })
    liElement.appendChild(btnRemover)
    ulElement.appendChild(liElement)
}

document.getElementById('adicionarJogo').addEventListener('click',adicionarLi)