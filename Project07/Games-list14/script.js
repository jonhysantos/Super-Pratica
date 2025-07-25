function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function addLi(game){
    const li = document.createElement('li')
    li.id = toKebabCase(game.name)
    li.innerHTML = `Nome:${game.name}.<br>Ano de lançamento:${game.year}.<br>
    Gênero:${game.genero}`

    document.getElementById('list-games').appendChild(li)
}

const form = document.getElementById('register-games')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const inputName = document.getElementById('input-name')
    const inputYear = document.getElementById('input-year')
    const inputGenero = document.getElementById('input-genero')

    if(inputName.value.length == 0 || inputYear.value.length == 0 ||
        inputGenero.value.length == 0
    ){
        alert('Faltam dados')
        return
    }

    const games = []

    games.name = inputName.value
    games.year = Number(inputYear.value)
    games.genero = inputGenero.value
    addLi(games)
    e.target.reset()



})