function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase();
}

function addLi(game){
    const liElement = document.createElement('li');
    liElement.id = toKebabCase(game.name);
    liElement.innerHTML = `Nome: ${game.name}.`
    document.getElementById('list-games').appendChild(liElement);
}

const form = document.getElementById('register-games')

form.addEventListener('submit',function(event){
    event.preventDefault();

    const inputName = document.getElementById('input-name');


    if(inputName.value.length == 0){
        alert(`Faltam dados`)
        return
    }

    const games = []

    games.name = inputName.value 



    addLi(games)
    event.target.reset()
})