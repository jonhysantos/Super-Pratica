const stock = []

function registerProduct(){
    const name = prompt('Digite o nome do produto:')
    const quantity = parseInt(prompt(`Digite a quantidade para ${name}:`))

    if(isNaN(quantity) || quantity < 0){
        alert('Quantidade inválida,item não cadastrado.')
        return
    }

    // mesmo que {name:name,quantity:quantity}
    const item = {name,quantity}
    stock.push(item)
    alert(`${name} foi cadastrado no estoque com ${quantity} unidades`)
}

function itemList(){
    if(stock.length == 0){
        alert('O estoque está vazio')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo
    const itensStrings = stock.map(function(item,index){
        return `${index + 1} ${item.name}: ${item.quantity}`
    }).join('\n')
    alert(`Item no estoque.\n ${itensStrings}`)
}

function changeQuantity(){
    itemList()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar quantidade.')) - 1
    if(isNaN(indice) || indice < 0 || indice >= stock.length){
        alert('Item inexistente')
        return

    }

    const newQuantity = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name}:`))
    if(isNaN(newQuantity) || newQuantity < 0 ){
        alert('Qunatidade inválida')
        return
    }

    stock[indice].quantity = newQuantity
    alert(`${stock[indice].name} agora possui ${newQuantity}`)
}

function deleteProduct(){
    itemList()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a quantidade')) - 1
    if(isNaN(indice) || indice < 0 || indice >= stock.length){
        alert('Número do item inexistente')
        return
    }

    const itemDelete = stock[indice].name
    stock.splice(indice,1)
    alert(`${itemDelete} foi excluido do estoque.`)
}

let choice 

while(choice !== "5"){
    choice = prompt("Escolha uma opção:\n1.Cadastrar item no estoque.\n2.listar itens no  estoque.\n3.Alterar a quantidade de algum item.\n4.Excluir um item.\n5.Sair")

    switch(choice){
        case "1":
            registerProduct()
            break
        case "2":
            itemList()
            break
        case "3":
            changeQuantity()
            break
        case "4":
            deleteProduct()
            break
        case "5":
            alert('Saindo do programa de gerenciamento de estoque')
            break
        default:
            alert('Opção inválida')
    }
}