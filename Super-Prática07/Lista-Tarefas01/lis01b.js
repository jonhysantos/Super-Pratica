const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicionarTarefa);

function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase();
}

// função para adicionar uma nova tarefa a lista.
function adicionarTarefa(event){
    event.preventDefault();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value;

    if(textoTarefa !== ""){
        const listaTarefas = document.createElement('ulElement');
        const novaTarefa = document.createElement('li');

        // Cria um input do tipo checkbox para marcar como concluído.
        const checkbox = document.createElement('input');
        checkbox.id = toKebabCase(textoTarefa);
        checkbox.type = 'checkbox'
        checkbox.addEventListener('change',function(){
            novaTarefa.classList.toggle('concluido');
        });

        // Cria um label com a tarefa.
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textoTarefa);
        label.textContent = textoTarefa;

        novaTarefa.append(checkbox,label);

        // Adiciona um botão de excluir a tarefa.
        const botaoExclui = document.createElement('button');
        botaoExclui.textContent = 'Excluir';
        botaoExclui.addEventListener('click',function(){
            novaTarefa.remove()
        });

        novaTarefa.appendChild(botaoExclui);
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = ''
    }
}