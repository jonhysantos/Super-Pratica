const estoque = [];

function cadastrarItem(){
    const nome = prompt('Digite o nome do item que deseja cadastrar:')
    const quantidade = parseInt(prompt('Digite a quantidade do produto:'))
    if(isNaN(quantidade) || quantidade < 0 ){
        alert(`quantidade inválida.`)
        return
    }

    // mesmo que {nome:nome,quantidade:quantidade}
    const item = {nome,quantidade}
    estoque.push(item)
    alert(`${nome} foi cadastrado no estoque com ${quantidade} unidades.`)

}

let escolha

while(escolha !== "5"){
    escolha = prompt(`Escolha uma opção:\n1.Cadastrar item no estoque.\n2.Listar itens.\n3.Alterar quantidade.\n4.Excluir item do estoque.\n5.Sair`)

    switch(escolha){
        case "1":
            cadastrarItem()
            break
        case "5":
            alert(`Saindo do programa de gerenciamento de estoque.`)
            break
        default:
            alert(`Opção inválida,tente novamente.`)

    }
}