function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

const form = document.getElementById('form');
form.addEventListener('submit',toDo)


function toDo(event){
    event.preventDefault();

    const inputDo = document.querySelector('.input-do');
    const textDo = inputDo.value

    if(textDo !== ''){
        const newDo = document.createElement('li');
        const ulElementDo = document.querySelector('.ul-element');

        // Cria uma label com to do
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textDo)
        label.textContent = textDo

        // Faz a label aparecer
        newDo.append(label)


        ulElementDo.appendChild(newDo)
        inputDo.value = ''

    }else{
        alert('Digite sua lista de afazeres')
    }
}