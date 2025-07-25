function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function toDo(e){
    e.preventDefault()

    const li = document.createElement('li')

    const inputText = document.querySelector('.input-text');
    const inputDo = inputText.value

    if(inputDo !== ''){
        const ul = document.querySelector('.ul')

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.textContent = toKebabCase(inputDo)
        checkbox.addEventListener('click',function(){
            li.classList.toggle('did')
        })

        const label = document.createElement('label')
        label.htmlFor = toKebabCase(inputDo)
        label.textContent = inputDo

        const buttonDeleted = document.createElement('button')
        buttonDeleted.textContent = 'Excluir'
        buttonDeleted.addEventListener('click',function(){
            li.remove()
        })

        li.append(checkbox,label)
        ul.appendChild(li)
        li.appendChild(buttonDeleted)
        return 

    }

    alert('Faltam dados')
}

const form = document.getElementById('form')
form.addEventListener('submit',toDo)