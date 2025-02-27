const form = document.getElementById('form');
form.addEventListener('submit',toDo)

function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function toDo(event){
    event.preventDefault();

    const inputDo = document.querySelector('.input-do');
    const textDo = inputDo.value
    if(textDo !== ''){
        const newDo = document.createElement('li');
        const ulElementDo = document.querySelector('.ul-element');

        // Cria um input do tipo checkbox como to do
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.textContent = toKebabCase(textDo);
        checkbox.addEventListener('click',function(){
            newDo.classList.toggle('did');
        });

        // Cria uma label com todo
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textDo);
        label.textContent = textDo

        newDo.append(checkbox,label);

        // cria e adiciona um botão de excluir na nova tarefa
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Excluir'
        btnDelete.addEventListener('click',function(){
            newDo.remove()
        })

        newDo.appendChild(btnDelete);
        ulElementDo.appendChild(newDo);
        inputDo.value = ''

    }
}