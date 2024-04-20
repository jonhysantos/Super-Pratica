const estoque = []

function cadastrarItem(){
    const nome = prompt('Digite o nome do item:')
    const quantidade = parseInt('Digite a quantidade do item:')

    if(isNaN(quantidade) || quantidade <= 0 ){
        alert('Quantidade inválida.')
        return
    }

    // Mesmo que {nome:nome,quantidade:qantidade}
    const item = {nome,quantidade}
    estoque.push(item)
    alert(`${nome} foi adicionado com ${quantidade} unidades.`)
}