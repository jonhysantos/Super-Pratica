const stock = []

function registerProduct(){
    const name = prompt('Digite o nome do produto:')
    const quantity = parseInt(prompt('Digite a qauntidade:'))

    // mesmo que {name:name,quantity:quantity}
    const product = {name,quantity}
    stock.push(product)
    alert(`${name} foi cadastrado no estoque`)
}

function listProducts(){
    if(stock.length === 0){
        alert('O estoque está vazio')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo.
    const itensStrings = stock.map(function(item,index){
        return `${index + 1} ${item.name}:${item.quantity} unidades.`
    }).join('\n')
    alert(`Itens no estoque.\n ${itensStrings}`)
}

function changeQuantity(){
    listProducts()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a quantidade:')) - 1
    if(isNaN(indice) || indice < 0 || indice >= stock.length){
        alert('invalido')
        return
    }

    const newQuantity = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name}:`))
    if(isNaN(newQuantity) || newQuantity < 0){
        alert('Quantidade invalida')
        return
    }

    stock[indice].quantity = newQuantity
    alert(`${stock[indice].name} agora possui ${newQuantity} unidades`)
}

function deleteProduct(){
    listProducts()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a quantidade:')) - 1
    if(isNaN(indice) || indice < 0 || indice >= stock.length){
        alert('invalido')
        return
    }

    const productDeleted = stock[indice].name
    stock.splice(indice,1)
    alert(`${productDeleted} foi excluido do estoque`)
}

let choice 

while(choice !== "5"){
    choice = prompt('Escolha uma opção:\n1.Cadastrar item no estoque.\n2.Listar itens.\n3.Alterar a quantidade.\n4.Excluir um produto.\n5.Sair')

    switch(choice){
        case "1":
            registerProduct()
            break
        case "2":
            listProducts()
            break
        case "3":
            changeQuantity()
            break
        case "4":
            deleteProduct()
            break
        case "5":
            alert('Saindo....')
            break
        default:
            alert('Opção inválida')
    }
}