const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicionarTarefa);

// Reaproveitando a função da aula.
function toKebabcase(str){
    return str.split(' ').join('-').toLowerCase()
}

// Função para adicionar uma nova tarefa a lista.
function adicionarTarefa(event){
    event.preventDefault();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value

    if(textoTarefa !== ""){
        const listaTarefas = document.getElementById('ulElement');
        const novaTarefa = document.createElement('li');

        // Cria um input do tipo chekbox.
        const checkbox = document.createElement('input');
        checkbox.id = toKebabcase(textoTarefa);
        checkbox.type = 'checkbox'
        checkbox.addEventListener('change',function(){
            novaTarefa.classList.toggle('concluido')
        });

        // Cria uma label para a nova tarefa.
        const label = document.createElement('label');
        label.htmlFor = toKebabcase(textoTarefa)
        label.textContent = textoTarefa

        novaTarefa.append(checkbox,label)

        // adiciona um botão de excluir na nova tarefa.
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir'
        botaoExcluir.addEventListener('click',function(){
            novaTarefa.remove();
        });

        listaTarefas.appendChild(novaTarefa);
        novaTarefa.appendChild(botaoExcluir);
        inputTarefa.value = ''
        
    }
}