function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function toDo(e){
    e.preventDefault()
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    const inputText = document.querySelector('.input-text')
    const inputDo = inputText.value

    if(inputDo !== ''){
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(inputDo);
        label.textContent = inputDo

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.addEventListener('click',function(){
            li.classList.toggle('did')
        })

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Excluir'
        btnDelete.addEventListener('click',function(){
            li.remove()
        })

        li.append(checkbox,label)
        ul.appendChild(li)
        li.appendChild(btnDelete)

        e.target.reset()

        return
    }
    alert('Faltam dados')
}

const form = document.getElementById('form')
form.addEventListener('submit',toDo)