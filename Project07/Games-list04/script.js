function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase();
}

function addLi(game){
    const liElement = document.createElement('li');
    liElement.id = toKebabCase(game.name);
    liElement.innerHTML = `<p>Nome: ${game.name}</p>`
    liElement.innerHTML += `<p>Ano de lançamento: ${game.year}</p>`
    liElement.innerHTML += `<p>Gênero: ${game.genero}`
    document.getElementById('list-games').appendChild(liElement)
}

const form = document.getElementById('register-games');
form.addEventListener('submit',function(event){
    event.preventDefault()

    const inputName = document.getElementById('input-name')
    const inputYear = document.getElementById('input-year')
    const inputGenero = document.getElementById('input-genero')
    if(inputName.value.length == 0){
        alert('Preencha todos os campos')
        return
    }

    const games = []
    games.name = inputName.value
    games.year = Number(inputYear.value)
    games.genero = inputGenero.value

    addLi(games)

    
    event.target.reset()
})