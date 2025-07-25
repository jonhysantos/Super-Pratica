function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function toDo(e){
    e.preventDefault()

    const li = document.createElement('li');

    const inputText = document.querySelector('.input-text')
    const inputDo = inputText.value
    if(inputDo !== ''){
        const ul = document.querySelector('ul')
        const label = document.createElement('label')
        label.htmlFor = toKebabCase(inputDo)
        label.textContent = inputDo

        li.append(label);
        ul.appendChild(li)
        return
    }
    alert('Faltam dados')
}

const form = document.getElementById('form');
form.addEventListener('submit',toDo)