const stock = []

function registerProduct(){
    const name = prompt('Digite o nome do produto:')
    const quantity = parseInt(prompt(`Digite a quantidade para ${name}:`))

    if(isNaN(quantity) || quantity < 0){
        alert('Quantidade inválida, produto não cadastrado')
        return
    }

    // Mesmo que {name:name,quantity:quantity}
    const product = {name,quantity}
    stock.push(product)
    alert(`${name} foi cadastrado no estoque com ${quantity} unidades.`)
}

function listProducts(){
    if(stock.length === 0){
        alert('O estoque está vazio')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo.
    const itensStrings = stock.map(function(item,index){
        return `${index + 1} ${item.name}:${item.quantity} unidades`
    }).join('\n')
    alert(`Produtos no estoque.\n ${itensStrings}`)
}

function changeQuantity(){
    listProducts()
    const indice = parseInt(prompt(`Digite o número do produto que deseja alterar a quantidade:`)) - 1
    if(isNaN(indice) || indice < 0 || indice >= stock.length){
        alert('Número do produto inválido ou não consta no estoque')
        return
    }

    const newQuantity = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name}:`))
    if(isNaN(newQuantity) || newQuantity < 0){
        alert('Qunatidade inválida ou não é um número')
        return
    }

    stock[indice].quantity = newQuantity
    alert(`${stock[indice].name} agora possui ${newQuantity} unidades em estoque.`)

}

function deleteProduct(){
    listProducts()
    const indice = parseInt(prompt(`Digite o número do produto que deseja alterar a quantidade:`)) - 1
    if(isNaN(indice) || indice < 0 || indice >= stock.length){
        alert('Número do produto inválido ou não consta no estoque')
        return
    }

    const productDeleted = stock[indice].name
    stock.splice(indice,1)
    alert(`${productDeleted} foi deletado do estoque`)
}

let choice 

while(choice !== "5"){
    choice = prompt(`Escolha O que fazer no estoque.\n1.Cadastrar novo produto.\n2.Listar os produtos em estoque.\n3.Alterar quantidade.\n4.Exluir um produto.\n5.Sair do gerenciamento de estoque`)

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
            alert('Saindo do gerenciamento de estoque...')
            break
        default:
            alert('Oção inválida,tente novamente')
    }
}