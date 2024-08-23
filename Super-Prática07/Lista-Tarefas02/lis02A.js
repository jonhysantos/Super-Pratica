const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicioanrTarefa);

function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase();
}

function adicioanrTarefa(event){
    event.preventDefault();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value;

    if(textoTarefa !== ""){
        const novaTarefa = document.createElement('li');
        const listaTarefas = document.getElementById('ulElement');

        // Cria um input do tipo checkbox para marcar como concluído.
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

        // Adiciona uma botão de excluir na nova tarefa.
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir'
        botaoExcluir.addEventListener('click',function(){
            novaTarefa.remove()
        });

        novaTarefa.appendChild(botaoExcluir);
        listaTarefas.appendChild(novaTarefa);
        inputTarefa.value = ''
    }
}