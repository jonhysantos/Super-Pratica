function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function toDo(event){
    event.preventDefault()

    const inputText = document.querySelector('.input-text');
    const textDo = inputText.value
    if(textDo !== ""){
        const li = document.createElement('li');
        const ul = document.querySelector('.ul')

        const label = document.createElement('label')
        label.htmlFor = toKebabCase(textDo)
        label.textContent = textDo

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.addEventListener('click',function(){
            li.classList.toggle('did')
        })

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Excluir'
        buttonDelete.addEventListener('click',function(){
            li.remove()
        })

        li.append(checkbox,label)
        ul.appendChild(li)
        li.appendChild(buttonDelete)
        event.target.reset()
    }else{
        alert('Digite a sua tarefa.')
    }
}

const form = document.getElementById('form')
form.addEventListener('submit',toDo)