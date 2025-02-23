const stock = []

function registerProducts(){
    const name = prompt(`Digite o nome do produto:`)
    const quantity = parseInt(prompt(`Digite a quantidade para ${name}:`))

    // Mesmo que {name:name,quantity:quantity}
    const products = {name,quantity}
    stock.push(products)
    alert(`${name} foi cadastrado no estoque com ${quantity} unidades.`)
}

function listProduct(){
    if(stock.length === 0 ){
        alert('o estoque está vazio')
        return
    }

    // Transforma uma lista de strings em uma lista de objetos e depois junta tudo.
    const productsStrings = stock.map(function(item,index){
        return `${index + 1} ${item.name}: ${item.quantity} unidades`
    }).join('\n')
    alert(`Produtos nos eatoque.\n ${productsStrings}`)
}

function changeQuantity(){
    listProduct()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a quantidade:')) - 1
    if(indice < 0 || isNaN(indice)){
        alert('Número do produto inválido')
        return
    }

    const newQuantity = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name};`))
    if(isNaN(newQuantity) || newQuantity < 0){
        alert('Nova quantidade inválida')
        return
    }
    stock[indice].quantity = newQuantity
    alert(`${stock[indice].name} agora possui ${newQuantity} unidades`)
}

function deleteProduct(){
    listProduct()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a quantidade:')) - 1
    if(indice < 0 || isNaN(indice)){
        alert('Número do produto inválido')
        return
    }

    const productDeleted = stock[indice].name
    stock.splice(indice,1)
    alert(`${productDeleted} foi excluído do estoque.`)
}

let choice

while(choice !== "5"){
    choice = prompt(`Escolha uma opção:\n1.Cadastrar produto.\n2.Listar produtos.\n3.Alterar a quantidade.\n4.Excluir um produto.\n5.Sair`)

    switch(choice){
        case "1":
            registerProducts()
            break
        case "2":
            listProduct()
            break
        case "3":
            changeQuantity()
            break
        case "4":
            deleteProduct()
            break
        case "5":
            alert('Saindo...')
            break
        default:
            alert(`Opção inválida`)
    }
}