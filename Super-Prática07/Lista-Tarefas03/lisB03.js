const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicionarTarefa);

function toKebabCase(str){
    return str.split( ).join('-').toLowwerCase();
}

function adicionarTarefa(event){
    event.preventDefault();
    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value;
    if(textoTarefa !== ""){
        const novaTarefa = document.createElement('li');
        const listaTarefas = document.getElementById('ulElement');

        // Cria um input do tipo checkbox para marcar como concluído.
        const checkbox = document.createElement('input');
        checkbox.tipe = 'checkbox';
        checkbox.textContent = toKebabCase(textoTarefa);
        checkbox.addEventListener('change',function(){
            novaTarefa.classList.toggle('concluido');
        });

        // Cria uma label com a nova tarefa.
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textoTarefa)
        label.textContent = textoTarefa

        novaTarefa.append(checkbox,label);

        // Adiciona um botão para excluir a nova tarefa.
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click',function(){
            novaTarefa.remove();
        });

        novaTarefa.appendChild(botaoExcluir);
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = ''
    }
}