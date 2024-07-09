const formTarefa = document.getElementById('formTarefa');
formTarefa.addEventListener('submit',adicionarTarefas);

// Reaproveitando a função usada no exercício anterior
function toKebabCase(str){
    return str.split(" ").join("-").toLowerCase()
}

// Função para adicionar uma nova tarefa a lista.
function adicionarTarefas(event){
    event.preventDefault();

    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value;
    if(textoTarefa !== ""){

        const listaTarefas = document.getElementById('listaTarefas');
        const novaTarefa = document.createElement('li');

        // Cria um input de checkbox para marcar como concluído.
        const checkbox = document.createElement('input');
        checkbox.id = toKebabCase(textoTarefa)
        checkbox.type = "checkbox";
        checkbox.addEventListener("change",function () {
            novaTarefa.classList.toggle("concluido");
        });

        // Cria uma label com a tarefa.
        const label = document.createElement('label');
        label.htmlFor = toKebabCase(textoTarefa);
        label.textContent = textoTarefa

        novaTarefa.append(checkbox,label);

        // Adiciona um botão para excluir a tarefa.
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.addEventListener('click',function () {
            novaTarefa.remove();

        });

        novaTarefa.appendChild(botaoExcluir);
        listaTarefas.appendChild(novaTarefa);
        event.target.reset()
    }


}