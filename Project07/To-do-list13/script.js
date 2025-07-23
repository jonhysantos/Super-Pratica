function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function toDo(e){
    e.preventDefault()
    const li = document.createElement('li');
    const inputText = document.querySelector('.input-text');
    const inputToDo = inputText.value
    if(inputToDo !== ''){
        const ul = document.querySelector('ul')
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(inputToDo)
        label.textContent = inputToDo
        li.append(label)
        ul.appendChild(li);

        return
    }
    alert('Por favor digitar o a fazer')

}

const form = document.getElementById('form')
form.addEventListener('submit',toDo)