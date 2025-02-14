const stock = []

function registerProducts(){
    const name = prompt('Digite o nome do produto:')
    const quantity= parseInt(prompt(`Digite a quantidade para ${name}:`))

    if(isNaN(quantity) || quantity < 0 || quantity.length == 0 ){
        alert('Quantidade inválida')
    }

    // Mesmo que {name:name,quantity:quantity}
    const item = {name,quantity}
    stock.push(item)
    alert(`${name} foi cadastrado no estoque com ${quantity} unidades.`)
}

function itemList(){
    if(stock.length === 0){
        alert('O estoque está vazio')
        return
    }

    // Transforma uma lista de strings em uma lista de objetos e depois junta tudo.
    const itensStrings = stock.map(function(item,index){
        return `${index + 1} ${item.name}: ${item.quantity} unidades`
    }).join('\n')
    alert(`itens no estoque. \n ${itensStrings}`)
}

let choice 

while(choice !== "5"){
    choice = prompt(`Escolha uma opção:\n1.Cadastrar item no estoque.\n2.Listar itens no estoque.\n3.Alterar quantidade.\n4.Excluir item do estoque.\n5.Sair`)

    switch(choice){
        case "1":
            registerProducts()
            break
        case "2":
            itemList()
            break
        case "5":
            alert('Saindo do programa de gerenciamento de estoque')
            break
        default:
            alert('Opção inválida,tente novamente')
    }
}