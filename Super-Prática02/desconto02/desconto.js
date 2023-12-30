let preço = document.querySelector('#txtp')
let porcentagemDesconto = document.querySelector('#txtd')
let res = document.querySelector('#res')

// Ação do clique

let button = document.querySelector('.button')
button.addEventListener('click', verDesconto)

// Função da ação 

function verDesconto(){
    if(preço.value.length == 0){
        window.alert('Por favor digite o preço do produto.')
    }else if(porcentagemDesconto.value.length == 0){
        window.alert('Por favor digite a porcentagem de desconto')
    }else{
        // Config a div#res para aparecer na tela
        res.style.display = 'block'

        // transformando texto em número
        let preçoProduto = Number(preço.value)
        let descontoProduto = Number(porcentagemDesconto.value)

        // Calculando o desconto
        let desconto = (descontoProduto / 100) * preçoProduto

        // Preço com o desconto aplicado
        let preçoFinal = preçoProduto - desconto

        // Exibe o resultado na tela
        res.innerHTML = `<p> Preço ${preçoProduto} Reais </p>`
        res.innerHTML += `<p>Desconto R$ -:${desconto} Reais </p>`
        res.innerHTML += `<p>Preço final ${preçoFinal} Reais</p>`

    }
}