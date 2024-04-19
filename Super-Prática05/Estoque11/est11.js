const estoque = []

function cadastrarItem(){
    const nome = prompt('Digite o nome do item:')
    const quantidade = parseInt(prompt('Digite a quantidade do item:'))

    if(isNaN(quantidade) || quantidade <= 0){
        alert('Quantidade inválida.')
        return
    }

    // Mesmo que {nome:nome,quantidade:quantidade}
    const item = {nome,quantidade}
    estoque.push(item)
    alert(`${nome} foi cadastrado no estoque com ${quantidade} unidades.`)
}

function listaItens(){
    if(estoque.length === 0){
        alert('O estoque está vazio.')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo.
    const itensStrings = estoque.map(function(item,index){
        return`${index +1}. ${item.nome}: ${item.quantidade} unidades.`
    }).join('\n')
    alert(`Itens no estoque.\n${itensStrings}.`)
}

let escolha 

while(escolha !== "5"){

    escolha = prompt(`Escolha uma opção:\n1.Cadastrar item.\n2.Listar itens.\n5.Sair.`)

    switch(escolha){
        case "1":
            cadastrarItem()
            break
        case "2":
            listaItens()
            break
        
        case "5":
            alert('Saindo do programa de gerenciamento de estoque...')
            break
        default:
            alert('Opção inválida,tente novamente.')
    }
}