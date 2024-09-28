function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase();
}

function addLi(game){
    const liElement = document.createElement('li');
    liElement.id = toKebabCase(game.name);
    liElement.innerHTML = `Nome: ${game.name} <br> Ano de lançamento: ${game.year} <br> Gênero: ${game.gender}`

    document.querySelector('.ulElement').appendChild(liElement);
}

const form = document.getElementById('gameRegistration');
form.addEventListener('submit',function(event){
    event.preventDefault();

    const inputName = document.querySelector('.input-name');
    const inputYear = document.querySelector('.input-year');
    const inputGender = document.querySelector('.input-gender');

    const game = {}

    game.name = inputName.value
    game.year = Number(inputYear.value);
    game.gender = inputGender.value

    addLi(game);
    document.querySelector('.hidden').style.display = 'block'
    event.target.reset()
})