const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicionarTarefa);

// Reaproveitando a função da aula
function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

function adicionarTarefa(event){
    event.preventDefault();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value

    if(textoTarefa !== ' '){
        const listaTarefa = document.getElementById('ulElement');
        const novaTarefa = document.createElement('li');

        // Cria um input de checkbox para marcar como concluido.
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = toKebabCase(textoTarefa);
        checkbox.addEventListener('change',function(){
            novaTarefa.classList.toggle('concluido');
        });

        // Cria uma label para a nova tarefa.
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textoTarefa);
        label.textContent = textoTarefa;

        novaTarefa.append(checkbox,label);

        // Adiciona um botão de excluir na nova tarefa.
        const botaoExclur = document.createElement('button');
        botaoExclur.textContent = 'Excluir';
        botaoExclur.addEventListener('click',function(){
            novaTarefa.remove();
        });

        novaTarefa.appendChild(botaoExclur);
        listaTarefa.appendChild(novaTarefa);
        inputTarefa.value = ''
    }
}