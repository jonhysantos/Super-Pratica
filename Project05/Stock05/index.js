const stock = []

function registerProduct(){
    const name = prompt('Digite o nome do produto:')
    const quan = parseInt(prompt(`Digite a quantidade para ${name}:`))

    // mesmo que = {name:name,quan:quan}
    const item = {name,quan}
    stock.push(item);
    alert(`${name} foi registrado no estoque com ${quan} unidades.`)
}

function listProducts(){
    if(stock.length === 0){
        alert('O estoque está vazio')
        return
    }

    // Transforma uma lista de objetos em uma lista de strings e depois junta tudo
    const strings = stock.map(function(item,index) {
        return `${index + 1} ${item.name}: ${item.quan} unidades`
    }).join('\n')

    alert(`Produtos no estoque.\n ${strings}`)
}

function changeQuan(){
    listProducts()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a quantidade:')) - 1

    if(isNaN(indice) || indice < 0){
        alert('numero inválida')
        return
    }

    const newQuan = parseInt(prompt(`Digite a nova quantidade para ${stock[indice].name}:`))
    if(isNaN(newQuan) || newQuan < 0){
        alert('Quantidade inválida')
        return
    }

    stock[indice].quan = newQuan
    alert(`${stock[indice].name} Agora possui ${newQuan} unidades`)
}

function deleteProduct(){
    listProducts()
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a quantidade:')) - 1

    if(isNaN(indice) || indice < 0){
        alert('numero inválida')
        return
    }

    const itemDeleted = stock[indice].name
    stock.splice(indice,1);
    alert(`"${itemDeleted}" foi deletado do estoque`)


}

while(true){
    let options = parseInt(prompt('Escolha uma opção:\n1.Cadastrar produto.\n2.Listar produtos.\n3.Alterar a quantidade.\n4.Excluir um produto.\n5.Sair'))

    switch(options){
        case 1:
            registerProduct()
            break
        case 2:
            listProducts();
            break
        case 3:
            changeQuan();
            break
        case 4:
            deleteProduct();
            break
        case 5:
            alert('Saindo...')
            break
        default:
            alert('opção inválida')
    }

    if(options === 5){
        break
    }
}