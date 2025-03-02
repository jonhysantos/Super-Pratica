function toKebabCase(str){
        return str.split(' ').join('-').toLowerCase();
}

function toDo(event){
        event.preventDefault()

        const inputText = document.querySelector('.input-text')
        const textDo = inputText.value
        if(textDo !== ''){
                const liDo = document.createElement('li');
                const ulList = document.querySelector('.ul')


                // create a label with todo
                const label = document.createElement('label')
                label.htmlFor = toKebabCase(textDo)
                label.textContent = textDo

                 // create a input type of checkbox as to do
                 const checkbox = document.createElement('input');
                 checkbox.type = 'checkbox'
                 checkbox.addEventListener('click',function(){
                        liDo.classList.toggle('did')
                 });
                 // create and add a button to remove a new todo
                 const buttonDelete = document.createElement('button');
                 buttonDelete.textContent = 'Exclui'
                 buttonDelete.addEventListener('click',function(){
                        liDo.remove()
                 })
                liDo.append(checkbox,label)
                ulList.appendChild(liDo)
                liDo.appendChild(buttonDelete)
                inputText.value = ''
        }else{
                alert('Por favor,digite a tarefa')
        }
}

const form = document.getElementById('form')
form.addEventListener('submit',toDo)