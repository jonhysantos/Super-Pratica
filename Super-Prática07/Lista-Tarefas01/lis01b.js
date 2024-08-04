const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicionarTarefa);

// Reaproveitando a função da aula.
function toKebabCase(str){
    return str.split(' ').join('-').toLowerCase()
}

// Função para adicionar uma nova tarefa a lista.
function adicionarTarefa(event){
    event.preventDefaut();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value;

    if(textoTarefa !== ""){
        const listaTarefas = 
        // Cria um input do tipo checkbox para marcar como concluido
        const checkbox = document.getElementById('input');
        checkbox.id = toKebabCase(textoTarefa);
        checkbox.type = 'checkbox'
        checkbox.addEventListener('change',function(){
            checkbox.classList.toggle('concluido');
        });

        // Cria uma label com a tarefa.
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textoTarefa)
        label.textContent = textoTarefa

        nov
    }
}