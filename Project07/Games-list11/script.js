function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}


function addLi(game){
    const li = document.createElement('li');
    li.id = toKebabCase(game.name);
    li.innerHTML = `Nome:${game.name}`
    document.getElementById('list-games').appendChild(li)
}

const form = document.getElementById('register-games')


form.addEventListener('submit',function(event){
    event.preventDefault()
    const inputName = document.getElementById('input-name')

    if(inputName.value.length == 0){
        alert('Faltam dados')
        return 
    }

    const games = []
    games.name = inputName.value 

    addLi(games)
    event.target.reset()
})


