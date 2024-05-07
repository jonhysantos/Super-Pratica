let txtp = document.querySelector('#txtp')
let txtd = document.querySelector('#txtd')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',calcular)

function calcular(){
    if(txtp.value.length == 0 || txtd.value.length == 0){
        alert('Por favor, preencha os campos corretamente.')
        return
    }

    //Salva os valores em uma nova variável.
    let preco = Number(txtp.value)
    let desconto = Number(txtd.value)

    // Calcula o desconto em reais
    let descontoCalculado = (desconto / 100) * preco

    let novoPreco = preco - descontoCalculado

    // Exibe o resultado ao usuário
    res.innerHTML += `<p>Preço ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `<p>Descnto em reais ${descontoCalculado.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `<p>Preço final ${novoPreco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`

}