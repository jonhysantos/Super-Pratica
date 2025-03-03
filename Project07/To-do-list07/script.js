function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase();
}

function toDo(event){
    event.preventDefault()

    const inputText = document.querySelector('.input-text');
    const textDo = inputText.value
    if(textDo !== ''){
        const liDo = document.createElement('li');
        const ulDo = document.querySelector('.ul');

        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textDo)
        label.textContent = textDo

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.addEventListener('click',function(){
            liDo.classList.toggle('did')
        })

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Excluir'
        buttonDelete.addEventListener('click',function(){
            liDo.remove()
        })

        liDo.append(checkbox,label)
        ulDo.appendChild(liDo)
        liDo.appendChild(buttonDelete)
    }
}

const form = document.getElementById('form')
form.addEventListener('submit',toDo)