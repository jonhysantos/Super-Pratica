const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicionarTarefa)

// Reaproveitando a função aprendida da aula
function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

// Função para adicionar uma nova tarefa à lista.
function adicionarTarefa(event){
    event.preventDefault();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value

    if(textoTarefa !== ''){
        const listaTarefas = document.getElementById('ulElement');
        const novaTarefa = document.createElement('li');

        //Cria um input do tipo checkbox para marcar como concluído.
        const checkbox = document.createElement('input');
        checkbox.id = toKebabCase(textoTarefa);
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change',function(){
            novaTarefa.classList.toggle('concluido');
        });

        // Cria um label com a tarefa.
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textoTarefa);
        label.textContent = textoTarefa

        novaTarefa.append(label,checkbox);

        // Adiciona um botão de excluir a tarefa.
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = `Excluir`;
        botaoExcluir.addEventListener('click',function(){
            novaTarefa.remove();
        });
        novaTarefa.appendChild(botaoExcluir);
        listaTarefas.appendChild(novaTarefa);

        inputTarefa.value = ''

    }
}