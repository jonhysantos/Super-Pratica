const estoque = [];

function cadastrarItens(){
    const nome = prompt('Digite o nome do item que deseja cadastrar:');
    const quantidade = parseInt(prompt(`Digite a quantidade para ${nome}:`));

    if(isNaN(quantidade) || quantidade < 0){
        alert(`Quantidade inválida.`)
        return
    }

    // Mesmo que {nome:nome,quantidade:quantidade}
    const item = {nome,quantidade}
    estoque.push(item);
    alert(`${nome} foi cadastrado no estoque com ${quantidade} unidades.`);
}

function listarItens(){
    if(estoque.length === 0){
        alert('O estoque está vazio');
    }

    // Transforma uma lista de strings em uma lista de objetos e depois junta tudo.
    const itensStrings = estoque.map(function(item,index){
        return `${index + 1}: ${item.nome} ${item.quantidade} unidades`
    }).join('\n');
    alert(`Itens no estoque.\n ${itensStrings}`)
}

function alterarQuantidade(){
    listarItens();
    const indice = parseInt(prompt('Digite o número do item que deseja alterar a quantidade:')) - 1
    if(isNaN(indice) || indice < 0 || indice >= estoque.length){
        alert(`Número inválido`);
        return
    }

    const novaQuantidade = parseInt(prompt(`Digite a nova quantidade para ${estoque[indice].nome}:`));
    if(isNaN(novaQuantidade) || novaQuantidade < 0 ){
        alert(`Nova quantidade inválida,item não alterado.`)
        return
    }

    estoque[indice].quantidade = novaQuantidade
    alert(`"${estoque[indice].nome}" Agora possui ${novaQuantidade}`)
}

function excluirItem(){
    listarItens();

    const indice = parseInt(prompt('Digite o número do item que deseja excluir do estoque:'))- 1
    if(isNaN(indice) || indice < 0 || indice >= estoque.length){
        alert(`Número do item inválido.`) 
        return
    }

    const itemExcluido = estoque[indice].nome
    estoque.splice(indice,1);
    alert(`${itemExcluido} foi excluído do estoque`)
}

let escolha

while(escolha !== "5"){
    escolha = prompt(`Escolha uma opção:\n1.Cadastrar item no estoque.\n2.listar itens.\n3.Alterar quantidade.\n4.Excluir item.\n5.Sair`);

    switch(escolha){
        case "1":
            cadastrarItens();
            break
        case "2":
            listarItens();
            break
        case "3":
            alterarQuantidade();
            break
        case "4":
            excluirItem();
            break
        case "5":
            alert('Saindo do programa de gerenciamento de estoque.');
            break
        default:
            alert(`Opção inválida,tente novamente.`)
    }
}