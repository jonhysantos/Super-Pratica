const estoque = [];

function cadastrarItem(){
    const nome = prompt('Digite o nome do item:');
    const quantidade = parseInt(prompt('Digite a quantidade do item:'));

    // Mesmo que {nome:nome,quantidade:quantidade}
    const item = {nome,quantidade};
    estoque.push(item)
    alert(`${nome} foi cadastrado no estoque com ${quantidade} unidades`)
}