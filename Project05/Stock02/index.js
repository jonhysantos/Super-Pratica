const stock = []

function registerProduct(){
    const name = prompt('Digite o nome do produto:')
    const quantity = parseInt(prompt(`Digite a quantidade para ${name}.`))

    if(isNaN(quantity) || quantity < 0){
        alert('Quantidade inválida')
        return
    }

    // mesmo que {name:name,quantity:quantity}
    const products = {name,quantity}
    stock.push(products)
    alert(`${name} foi cadastrado no estoque com ${quantity} unidades`)
}

function listProducts(){
    if(stock.length === 0){
        alert('O estoque está vazio')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo.
    const itensStrings = stock.map(function(item,index){
        return  `${index + 1} ${item.name}: ${item.quantity} unidades`
    }).join('\n')
    alert(`Itens no estoque.\n ${itensStrings}`)
}

function changeQuantity(){
    listProducts()
    if(stock.length === 0){
        alert('Por favor adicione itens.')
      return
    }
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a qauntidade')) -1
    if(isNaN(indice) || indice < 0 || indice >= stock.length){
        alert('Produto não existente')
        return
    }

    const newQuantity = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name}:`))
    if(isNaN(newQuantity) || newQuantity < 0){
        alert('Quantidade inválida')
        return
    }

    stock[indice].quantity = newQuantity
    alert(`${stock[indice].name} agora possui ${newQuantity} unidades`)
}

function deleteProduct(){
    listProducts()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a qauntidade')) -1
    if(isNaN(indice) || indice < 0 || indice >= stock.length){
        alert('Produto não existente')
        return
    }

    const productDeleted = stock[indice].name
    stock.splice(indice,1)
    alert(`"${productDeleted} "foi deletado do estoque.`)
}

let choice 

while(choice !== "5"){
    choice = prompt(`Escolha uma opção:\n1.Cadastrar item no estoque.\n2.Listar itens.\n3.Alterar quantidade.\n4.Excluir um item.\n5.Sair`)

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
            alert('Saindo...')
            break
        default:
            alert('Opção inválida')
    }
}