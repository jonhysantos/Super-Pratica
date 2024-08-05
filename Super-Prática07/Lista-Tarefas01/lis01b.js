const formTarera = document.getElementById('formTarefa');
formTarera.addEventListener('submit',adicionarTarefa);

// Reaproveitando a função da aula.
function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

// Função para adicionar uma nova tarefa a lista.
function adicionarTarefa(event){
    event.preventDefault();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value;

    if(textoTarefa !== ""){
        const listaTarefa = document.getElementById('ulElement')
        const novaTarefa = document.createElement('li')

        // Cria uma checkbox para marcar como concluido.
        const checkbox = document.createElement('input');
        checkbox.id = toKebabCase(textoTarefa);
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change',function(){
            novaTarefa.classList.toggle('concluido')
        });

        // Cria uma label com a tarefa.
        const label = document.createElement('label');
        label.id = toKebabCase(textoTarefa);
        label.htmlFor = toKebabCase(textoTarefa)
        label.textContent = textoTarefa

        novaTarefa.append(checkbox,label);

        // Adiciona um botão de excluir a nova tarefa.
        const excluir = document.createElement('button');
        excluir.textContent = 'Excluir'
        excluir.addEventListener('click',function(){
            novaTarefa.remove();
        });

        novaTarefa.appendChild(excluir);
        listaTarefa.appendChild(novaTarefa);
        inputTarefa.value = ''
        
    }
}