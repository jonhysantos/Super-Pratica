const stock = []

function registerProducts(){
    const name = prompt('Digite o nome do produto:');
    const quantity = parseInt(prompt(`Digite a quantidade para ${name}:`))

    // Mesmo que {name:name,quantity;quantity}
    const product = {name,quantity}
    stock.push(product)
    alert(`${name} foi registrado no estoque com ${quantity} unidades`);
}

function listProduct(){
    if(stock.length === 0){
        alert('O estoqu está vazio')
        return
    }

    // Transforma uma lista de de objetos em uma lista de strings e depois junta tudo.
    const strings = stock.map(function(item,index) {
        return `${index + 1} ${item.name}: ${item.quantity} unidades`
    }).join('\n')
    alert(`Produtos no estoque \n ${strings}`)
}

function changeQuantity(){
    listProduct()
    const indice = parseInt(prompt(`Digite o número do item que deseja alterar a qauntidade:`)) - 1

    if(isNaN(indice) || indice < 0){
        alert('Numero inexistente')
        return
    }

    const newQauntity = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name}:`))

    if(isNaN(newQauntity) || newQauntity < 0){
        alert('Nova quantidade invalida')
        return
    }

    stock[indice].quantity = newQauntity
    alert(`${stock[indice].name} agora possui ${newQauntity} unidades`)
}

function deletProduct(){
    listProduct()
    const indice = parseInt(prompt(`Digite o número do item que deseja alterar a qauntidade:`)) - 1

    if(isNaN(indice) || indice < 0){
        alert('Numero inexistente')
        return
    }

    const productDeleted = stock[indice].name
    stock.splice(indice,1);
    alert(`"${productDeleted}" foi excluido do estoque`)
}

let choice 

while(choice !== "5"){
    choice = prompt(`Escolha uma opção:\n1.Cadastrar produto.\n2.Ver produtos no estoque\n3.Alterar a quantidade.\n4.Excluir produto.\n5.Sair`)

    switch(choice){
        case "1":
            registerProducts();
            break
        case "2":
            listProduct();
            break
        case "3":
            changeQuantity();
            break
        case "4":
            deletProduct();
            break
        case "5":
            alert('Saindo...');
            break
        default:
            alert('Opção inválida')
    }
}