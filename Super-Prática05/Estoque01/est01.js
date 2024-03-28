const estoque = []

function cadastrarItem(){
    const nome = prompt('Digite o nome do item:')
    const quantidade = parseInt(prompt('Digite a quantidade do item:'))

    if(isNaN(quantidade) || quantidade <= 0){
        window.alert('Quantidade inválida. O item não foi adicionado.')
        return 
    }

    // Mesmo que {nome:nome,quantidade:quantidade}
    const item = {nome,quantidade}
    estoque.push(item)
    window.alert(`${nome} foi adicionado ao estoque com ${quantidade} unidades.`)
}

function listarItens(){
    if(estoque.length === 0){
        window.alert('O estoque está vázio.')
        return
    }

    // Transforma a lista de objetos em uma lista de strings e depois junta tudo.
    const itensStrings = estoque.map(function(item, index){
        return `${index +1}. ${item.nome}: ${item.quantidade} unidades.`
    }).join('\n')
    window.alert(`Itens no estoque \n${itensStrings}`)
}

function alterarQuantidade(){
    listarItens()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar:')) -1
    if(isNaN(indice) || indice <= 0 || indice > estoque.length){
        window.alert('Número de item inválido.')
        return
    }

    const novaQuantidade = parseInt(prompt(`Digite a nova quantidade para "${estoque[indice].nome}":`))

    if(isNaN(novaQuantidade) || novaQuantidade <= 0){
        window.alert('Quantidade inválida, a alteração não foi feita.')
        return
    }

    estoque[indice].quantidade = novaQuantidade
    window.alert(`"${estoque[indice].nome}" agora possue ${novaQuantidade} unidades.`)
}

function excluirItem(){
    listarItens()
    
    const indice = parseInt(prompt(`Digite o número do item que deseja excluir:`)) -1
    if(isNaN(indice) || indice <= 0 || indice > estoque.length){
        window.alert('Número de item inválido.')
    }

    const nomeItemExcluido = estoque[indice].nome
    estoque.splice(indice,1)
    alert(`"${nomeItemExcluido}" foi excluído do estoque`)
}

let escolha

while(escolha !== "5"){
    escolha = prompt("Escolha uma opção: \n1.Cadastrar novo item. \n2.Listar item.\n3.Alterar quantidade.\n4.Exclui item.\n5.Sair.")

    switch(escolha){
        case "1":
            cadastrarItem()
            break
        case "2":
            listarItens()
            break
        case "3":
            alterarQuantidade()
            break
        case "4":
            excluirItem()
            break
        case "5":
            window.alert('Saindo do programa de gerenciamento de estoque...')
            break
        default:
            window.alert('Opção inválida, tente novamente.')
    }
}