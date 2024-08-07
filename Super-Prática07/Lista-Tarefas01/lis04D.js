const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicionarTarefa);

// Reaproveitando a função da aula.
function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

// Adiciona uma nova tarefa na lista de tarefas.
function adicionarTarefa(event){
    event.preventDefault();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value

    if(textoTarefa !== ''){
        // Salva a lista e o li como listaTarefas e novaTarefa
        const listaTarefas = document.getElementById('ulElement');
        const novaTarefa = document.createElement('li');

        // Cria um input do tipo checkox para marcar como concluido.
        const checkox = document.createElement('input');
        checkox.id = toKebabCase(textoTarefa);
        checkox.type = 'checkbox'
        checkox.addEventListener('change',function(){
            novaTarefa.classList.toggle('concluido');
        });

        // Cria um label com a tarefa.
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textoTarefa);
        label.textContent = textoTarefa

        novaTarefa.append(checkox,label);

        // Adiciona um botão de Excluir na nova tarefa.
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click',function(){
            novaTarefa.remove();
        })

        novaTarefa.appendChild(botaoExcluir);
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = ''
    }
}