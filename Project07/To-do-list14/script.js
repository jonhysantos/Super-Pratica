function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function toDo(e){
    e.preventDefault()

    const li = document.createElement('li')
    const inputText = document.querySelector('.input-text');
    const inputDo = inputText.value

    if(inputDo !== ''){

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.textContent = toKebabCase(inputDo)
        checkbox.addEventListener('click',function(){
            li.classList.toggle('did')
        })

        const ul = document.querySelector('ul')
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(inputDo);
        label.textContent = inputDo

        

        li.append(checkbox,label)
        ul.appendChild(li)

        return
    }
}

const form = document.getElementById('form');
form.addEventListener('submit',toDo)