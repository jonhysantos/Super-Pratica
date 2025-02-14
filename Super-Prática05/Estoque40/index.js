const stock = []

function registerProduct(){
    const name = prompt('Digite o nome do produto:')
    const quantity = parseInt(prompt(`Digite a quantidade para ${name}:`))

    if(isNaN(quantity) || quantity < 0){
        alert('Quantidade invalida')
        return
    }

    // mesmo que {name:name,quantity:quantity}
    const item = {name,quantity}
    stock.push(item)
    alert(`${name} foi adicionado ao estoque com ${quantity} unidades`)
}

let choice 

while(choice !== "5"){
    choice = prompt(`Escolha uma opção:\n1.Cadastrar item.\n2.Listar itens.\n3.Alterar quantiade.\n4.Excluir um item.\n5.sair`)

    switch(choice){
        case "1":
            registerProduct()
            break
        case "5":
            alert('Saindo do programa de gerenciamento de estoque.')
            break
        default:
            alert('Opção inválida')
    }
}