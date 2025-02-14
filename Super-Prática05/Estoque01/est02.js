const estoque = []
function cadastrarItem(){
    const name = prompt('Digite o nome do item que deseja cadastrar no estoque:')
    const quantidade = parseInt(prompt('Digite a quantidade do item:'))

    if(isNaN(quantidade) || quantidade < 0){
        alert('Quantidade inválida')
        return
    }

    // mesmo que {nome:nome,quantidade:quantidade}
    const item = {name,quantidade}
    estoque.push(item)
    alert(`${name} foi cadastrado no estoque com ${quantidade} unidades`)

}

function listarItens(){
    if(estoque.length == 0){
        alert('O estoque está vazio')
        return
    }

    // Transforma uma lista de strings em uma lista de objetos e depois junta tudo.
    const itensStrings = estoque.map(function(item,index){
        return `${index + 1} ${item.name}: ${item.quantidade} unidades`
    }).join('\n')
    alert(`itens no estoque \n${itensStrings}`)
}

function alterarQuantidade(){
    listarItens()
    const indice = parseInt(prompt('Digite o numero do item que deseja alterar a quantidade:')) -1
    if(isNaN(indice) || indice < 0 || indice >= estoque.length ){
        alert('Quantidade invalida')
        return
    }

    const novaQuantidade = parseInt(prompt(`Digite a nova quantidade para ${estoque[indice].name}`))
    if(isNaN(novaQuantidade) || novaQuantidade < 0){
        alert('nova quantidade invalida')
        return
    }

    estoque[indice].quantidade = novaQuantidade
    alert(`${estoque[indice].name} agora possui ${novaQuantidade}`)
}

function excluirItem(){
    listarItens()
    const indice = parseInt(prompt('Digite o número do item que deseja excluir do estoque:')) - 1
    if(isNaN(indice) || indice < 0 || indice >= estoque.length){
        alert('Numero invalido')
        return
    }
    const itemExcluido = estoque[indice].name
    estoque.splice(indice,1)
    alert(`${itemExcluido} foi excluido do estoque.`)
}


let escolha 

while(escolha !== "5"){
    escolha = prompt('Escolha uma opção:\n1.Cadastrar item.\n2.llistar itens no estoque.\n3.Alterar quantidade.\n4.Excluir um item.\n5.Sair')
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
            alert('Saindo do gerenciamento de estoque')
            break
        default:
            alert('Opção inválida,tente novamente')

    }
}