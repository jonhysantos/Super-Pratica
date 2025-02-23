const formToDolist = document.getElementById('formToDoList');
formToDolist.addEventListener('submit',toDo);

function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase();
}

function toDo(event){
    event.preventDefault();

    const inputToDo = document.querySelector('.input-to-do');
    const textToDo = inputToDo.value
    if(textToDo !== ''){
        const newToDo = document.createElement('li');
        const toDoList = document.querySelector('.ulElement');

        // create a input type of checkbox as to do
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.textContent = toKebabCase(textToDo);
        checkbox.addEventListener('click',function(){
            newToDo.classList.toggle('did')
        });
        // create a label with todo
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textToDo);
        label.textContent = textToDo

        newToDo.append(checkbox,label);

        // create and add a button to remove a new todo
        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Excluir'
        buttonDelete.addEventListener('click',function(){
            newToDo.remove()
        });

        newToDo.appendChild(buttonDelete);
        toDoList.appendChild(newToDo);
        inputToDo.value = ''
    }
}