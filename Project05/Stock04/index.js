const stock = []

function addProduct(){
    const name = prompt('Digite o nome do produto:');
    const quantity = parseInt(prompt(`Digite a quantidade para ${name}:`))

    // Mesmo que {name:name,quantity:quantity
    const product = {name,quantity}
    stock.push(product)
    alert(`${name} foi cadastrado no estoque com ${quantity} unidades`)
}

function seeProducts(){
    if(stock.length == 0){
        alert('O estoque está vazio')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo
    const productsStrings = stock.map(function(item,index){
        return `${index + 1} ${item.name}: ${item.quantity}`
    }).join('\n');
    alert(`Itens no estoque.\n ${productsStrings}`)
}

function changeQuantity(){
    seeProducts()
    const indice = parseInt(prompt('Digite o número do produto que deseja altearar a quantidade:')) - 1
    if(indice < 0 || isNaN(indice)){
        alert('Quantidade inválida')
        return
    }

    const newQauntity = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name}:`))

    if(isNaN(newQauntity) || newQauntity < 0){
        return
    }

    stock[indice].quantity = newQauntity
    alert(`${stock[indice].name} Agora possui ${newQauntity}`)
}

function deleteProduct(){
    seeProducts()
    const indice = parseInt(prompt('Digite o número do produto que deseja altearar a quantidade:')) - 1
    if(indice < 0 || isNaN(indice)){
        alert('Quantidade inválida')
        return
    }

    const productDeleted = stock[indice].name
    stock.splice(indice,1)
    alert(`"${productDeleted}" foi deletado do estoque`)
}

let choice 

while(choice !== "5"){
    choice = prompt(`Escolha o que deseja fazer:\n1.Cadastrar um produto.\n2.Ver produtos em estoque.\n3.Alterar a quantidade.\n4.Excluir um produto.\n5.Sair`)

    switch(choice){
        case "1":
            addProduct()
            break
        case "2":
            seeProducts();
            break
        case "3":
            changeQuantity();
            break
        case "4":
            deleteProduct();
            break
        case "5":
            alert('Saindo...')
            break
        default:
            alert('Opção inválida');
    }
}