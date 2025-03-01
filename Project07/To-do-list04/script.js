function toKebabcase(str){
        return str.split(' ').join('-').toLowerCase();
}

function toDo(event){
        event.preventDefault()

        const inputText = document.querySelector('.input-text');
        const textDo = inputText.value
        
        if(textDo !== ''){

                const liDo = document.createElement('li');
                const ulDo = document.querySelector('.ul');

                // create a label with todo
                const label = document.createElement('label');
                label.htmlFor = toKebabcase(textDo);
                label.textContent = textDo

                
               

                // create a input type of checkbox as to do
                const inputCheckbox = document.createElement('input');
                inputCheckbox.type = 'checkbox'
                inputCheckbox.textContent = toKebabcase(textDo)
                inputCheckbox.addEventListener('click',function(){
                        liDo.classList.toggle('did');
                })

                liDo.append(inputCheckbox,label)

                // create and add a button to remove a new todo 
                const buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'Excluir'
                buttonDelete.addEventListener('click',function(){
                        liDo.remove()
                })

                 ulDo.appendChild(liDo)
                 liDo.appendChild(buttonDelete)
                 event.target.reset()
                 inputText.value = ''

        }
}

const form = document.getElementById('form');
form.addEventListener('submit',toDo)


    


