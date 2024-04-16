const estoque = []

function cadastrarItem(){
    const nome = prompt('Digite o nome do item:')
    const quantidade = parseInt(prompt('Digite a quantidade para o item:'))

    if(isNaN(quantidade) || quantidade <= 0){
        alert('Quantidade inválida, o item não foi cadastrado.')
        return
    }
    // Mesmo que {nome:nome,quantidade:quantidade}
    const item = {nome,quantidade}
    estoque.push(item)
    alert(`${nome} foi cadastrado com ${quantidade} unidades.`)
}

function listarItem(){
    if(estoque.length === 0){
        alert('O estoque está vazio.')
        return
    }
    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo.
    const itensStrings = estoque.map(function(item,index){
        return`${index +1}:${item.nome}.${item.quantidade} unidades.`
    }).join('\n')
    alert(`Itens no estoque.\n${itensStrings}.`)
}

function alterarQuantidade(){
    listarItem()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a quantidade:'))-1
    if(isNaN(indice) || indice < 0 || indice > estoque.length){
        alert('Número inválido, item não alterado.')
        return
    }
    const novaQuantidade = parseInt(prompt(`Digite a nova quantidade do item "${estoque[indice].nome}"`))
    if(isNaN(novaQuantidade) || novaQuantidade <= 0){
        alert('Nova quantidade não alterada, número inválido.')
        return
    }

    estoque[indice].quantidade = novaQuantidade
    alert(`"${estoque[indice].nome}" agora possui ${novaQuantidade} unidades`)
}

function excluirItem(){
    listarItem()
    const indice = parseInt(prompt(`Digite o número do item que deseja excluir:`)) -1
    if(isNaN(indice) || indice < 0 || indice > estoque.length){
        alert('Número do item inválido, item não excluído.')
        
    }
    const nomeItemExcluido = estoque[indice].nome
    estoque.splice(indice,1)
    alert(`"${nomeItemExcluido}" foi excluído do estoque.`)
}

let escolha 

while(escolha !== "5"){
    escolha = prompt(`Escolha uma opção:\n1.Cadastrar item.\n2.Listar itens.\n3.Alterar quantidade.\n4.Exlcuir item.\n5.Sair.`)

    switch(escolha){
        case "1":
            cadastrarItem()
            break
        case "2":
            listarItem()
            break
        case "3":
            alterarQuantidade()
            break
        case "4":
            excluirItem()
            break
        case "5":
            alert('Saindo do programa de gerenciamento do estqoue.')
            break
        default:
            alert('Opção inválida,tente novamente.')
    }
}