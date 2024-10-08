const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicionarTarefa);

// Reaproveitando a função da aula.
function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase();
}

// Função para adicionar uma nova tarefa a lista.
function adicionarTarefa(event){
    event.preventDefault();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value

    if(textoTarefa.value !== ''){
        const listaTarefas = document.getElementById('ulElement');
        const novaTarefa = document.createElement('li');

        // Cria um input de checkbox para marcar como concluído.
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = toKebabCase(textoTarefa);
        checkbox.addEventListener('change',function(){
            novaTarefa.classList.toggle('concluido');
        });

        // Cria uma label com a tarefa.
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textoTarefa);
        label.textContent = textoTarefa

        novaTarefa.append(checkbox,label);

        // Adiciona um botao de excluir na nova tarefa.
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click',function(){
            novaTarefa.remove();
        });

        novaTarefa.append(botaoExcluir);
        listaTarefas.append(novaTarefa)
        inputTarefa.value = ''
    }
}