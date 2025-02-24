const stock = []

function registerProducts(){
    const name = prompt('Digite o nome do produto:');
    const quantity = parseInt(prompt(`Digite a quantidade para ${name}`))

    // Mesmo que {name:name,quantity:quantity}
    const product = {name,quantity}
    stock.push(product);
    alert(`${name} foi cadastrado no estoque com ${quantity} unidades`)
}

function listProducts(){
    if(stock.length === 0){
        alert(`O estoque está vazio`)
    }

    // Tranforma uma lista de strings em uma lista de objetos e depois junta tudo.
    const productsStrings = stock.map(function(item,index) {
        return `${index + 1} ${item.name}: ${item.quantity} unidades`
    }).join('\n')
    alert(`Produtos em estoque.\n ${productsStrings}`)
}

function changeQuantity(){
    listProducts();
    const indice = parseInt(prompt(`Digite o número do item que deseja alterar a quantidade:`)) - 1
    if(isNaN(indice) || indice < 0 || indice === ''){
        alert(`Número de indice inexistente`)
        return
    }

    const newQuantity = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name}`))
    if(isNaN(newQuantity) || newQuantity < 0 || newQuantity === ''){
        alert(`Quantidade inválida${stock[indice].name} não alterado.`)
        return
    }

    stock[indice].quantity = newQuantity
    alert(`${stock[indice].name} agora possui ${newQuantity} unidades`)
}

function deleteProducts(){
    listProducts();
    const indice = parseInt(prompt(`Digite o número do item que deseja alterar a quantidade:`)) - 1
    if(isNaN(indice) || indice < 0 || indice === ''){
        alert(`Número de indice inexistente`)
        return
    }

    const deletedProduct = stock[indice].name
    stock.splice(indice,1);
    alert(`"${deletedProduct}" foi deletado do estoque.`)

}

let choice

while(choice !== "5"){
    choice = prompt(`Escolha uma opção:\n1.Cadastrar novo produto.\n2.Listar produtos.\n3.Alterar a quantidade.\n4.Exluir um produto.\n5.Sair`)

    switch(choice){
        case "1":
            registerProducts();
            break
        case "2":
            listProducts();
            break
        case "3":
            changeQuantity();
            break
        case "4":
            deleteProducts();
            break
        case "5":
            alert('Saindo...')
            break
        default:
            alert('Opção inexistente')
    }
}