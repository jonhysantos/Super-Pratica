let txtp = document.querySelector('#txtp')
let txtd = document.querySelector('#txtd')
let btn = document.querySelector('#btn')
let res = document.querySelector("#res")

btn.addEventListener('click',calcular)

function calcular(){
    if(txtp.value.length == 0 || txtd.value.length == 0){
        alert('Campo vazio, preencha os campos e tente novamente.')
        return
    }
    let preco = Number(txtp.value)
    let porcentagem = Number(txtd.value)
    let desconto = (porcentagem / 100) * preco
    let precoMaisDesconto = preco - desconto
    res.innerHTML = `<p>Preço ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `<p>Desconto ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `<p>Valor final ${precoMaisDesconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
}