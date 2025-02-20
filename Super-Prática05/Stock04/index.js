const stock = []

function registerProducts(){
    const name = prompt('Digite o nome do produto:');
    const quantity = parseInt(prompt(`Digite a quantidade para ${name}:`));

    // mesmo que {name:name,quantity:quantity}
    const product = {name,quantity}
    stock.push(product)
    alert(`${name} foi cadastrado no estoque com ${quantity} unidades.`)
}

function listProductos(){
    if(stock.length === 0){
        alert('O estqoue está vazio.')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo.
    const productsStrings = stock.map(function(item,index){
        return `${index + 1} ${item.name}:${item.quantity} unidades`
    }).join('\n')
    alert(`Produtos no estoque.\n ${productsStrings}`)
}

function changeQuantity(){
    listProductos()
    const indice = parseInt(prompt(`Digite o número do item que deseja alterar:`)) - 1
    if(indice < 0 || isNaN(indice)){
        alert('Quantidade inválida')
        return
    }

    const newQuantity = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name}:`))
    if(isNaN(newQuantity) || newQuantity < 0){
        alert('invalido')
        return
    }

    stock[indice].quantity = newQuantity
    alert(`${stock[indice].name} agora possui ${newQuantity} unidades`)
}

function deleteProduct(){
    listProductos()
    const indice = parseInt(prompt(`Digite o número do item que deseja alterar:`)) - 1
    if(indice < 0 || isNaN(indice)){
        alert('Quantidade inválida')
        return
    }

    const deletedProduct = stock[indice].name
    stock.splice(indice,1)
    alert(`${deletedProduct} foi excluido do estoque.`)
}

let choice 

while(choice !== "5"){
    choice = prompt(`Escolha uma opção:\n1.cadastrar produto.\n2.Listar produtos.\n3.Alterar a quantidade.\n4.Exluir um produto.\n5.Sair`)

    switch(choice){
        case "1":
            registerProducts()
            break
        case "2":
            listProductos()
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
            alert('Opção inválida')
    }
}