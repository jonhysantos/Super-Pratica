const estoque = [];

function cadastrarItem(){
    const nome = prompt('Digite o nome do item que deseja cadastrar:')
    const quantidade = parseInt(prompt('Digite a quantidade do produto:'))
    if(isNaN(quantidade) || quantidade < 0 ){
        alert(`quantidade inválida.`)
        return
    }

    // mesmo que {nome:nome,quantidade:quantidade}
    const item = {nome,quantidade}
    estoque.push(item)
    alert(`${nome} foi cadastrado no estoque com ${quantidade} unidades.`)

}

function listarItens(){
    if(estoque.length === 0){
        alert('O estoque está vazio')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo.
    const itensStrings = estoque.map(function(item,index){
        return `${index + 1}. ${item.nome}: ${item.quantidade} unidades`
    }).join('\n')
    alert(`Itens no estoque.\n ${itensStrings}`)
}

function alterarQuantidade(){
    listarItens()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a sua quantidade:')) - 1
    if(isNaN(indice) || indice < 0 || indice >= estoque.length){
        alert(`Número do item inválido.`)
        return
    }

    const novaQunatidade = parseInt(`Digite a nova quantidade para ${estoque[indice].nome}`)
    if(isNaN(novaQunatidade) || novaQunatidade <= 0 ){
        alert('nova quantidade inválida. item não alterado.')
        return

    }

    estoque[indice].quantidade = novaQunatidade
    alert(`${estoque[indice].nome} agora possui ${novaQunatidade}`)
}

function excluiritem(){
    listarItens()
    const indice = parseInt(prompt('Digite o número do item que deseja excluir do estoque:'))
    if(isNaN(indice) || indice < 0 || indice >= estoque.length){
        alert('Número do item inválido.')
        return
    }

    const itemExcluido = estoque[indice].nome
    estoque.splice(indice,1)

    alert(`${itemExcluido} foi excluído do estoque.`)
}

let escolha

while(escolha !== "5"){
    escolha = prompt(`Escolha uma opção:\n1.Cadastrar item no estoque.\n2.Listar itens.\n3.Alterar quantidade.\n4.Excluir item do estoque.\n5.Sair`)

    switch(escolha){
        case "1":
            cadastrarItem()
            break
        case "2":
            listarItens().
            break
        case "3":
            alterarQuantidade()
            break
        case "4":
            excluiritem()
            break
        case "5":
            alert(`Saindo do programa de gerenciamento de estoque.`)
            break
        default:g
            alert(`Opção inválida,tente novamente.`)

    }
}