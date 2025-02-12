const estoque = []

function cadastrarItem(){
    const nome = prompt('Digite o nome do item:');
    const quantidade = parseInt(prompt('Digite a quantidade do item:'));

    if(isNaN(quantidade) || quantidade < 0){
        alert('Por favor digite a quantidade.')
        return
    }

    // mesmo que {nome:nome,quantidade:quantidade}
    const item = {nome,quantidade}
    estoque.push(item)
    alert(`${nome} foi cadastrado ao estoque com ${quantidade} unidades`)
}

function listarItens(){
    if(estoque.length == 0){
        alert('estoque está vazio')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo.
    const itensStrings = estoque.map(function(item,index){
        return `${index + 1}. ${item.nome}: ${item.quantidade} unidades`
    }).join('\n')
    alert(`Itens no estoque. \n ${itensStrings}`)
}

let escolha

while(escolha !== "5"){
    escolha = prompt(`Escolha uma opção:\n1.Cadastrar item no estoque.\n2.Listar itens do estoque.\n3.Alterar a quantidade.\n4.Excluir um item do estoque.\n5.Sair`)
    switch(escolha){
        case "1":
            cadastrarItem()
            break
        case "2":
            listarItens()
            break
        case "5":
            alert('Saindo do program de gerenciamento de estoque.')
            break
        default:
            alert('Opção inválida,tente novamente.')
    }
}