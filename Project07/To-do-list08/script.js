function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase();
}

function toDo(event){
    event.preventDefault()

    const inputTxt = document.querySelector('.input-text');
    const txtDo = inputTxt.value

    if(txtDo !== ''){
        const li = document.createElement('li');
        const ul = document.querySelector('.ul')

        const label = document.createElement('label');
        label.htmlFor = toKebabCase(txtDo)
        label.textContent = txtDo

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
        event.target.reset()
    }
}

const form = document.getElementById('form')
form.addEventListener('submit',toDo)