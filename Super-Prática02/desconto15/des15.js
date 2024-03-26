let preco = document.querySelector('#txtp')
let desconto = document.querySelector('#txtd')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',calcular)

function calcular(){
    if(preco.value.length == 0 || desconto.value.length == 0){
        window.alert('Caixa em branco')
    }else{
        res.style.display = 'block'
        let p = Number(preco.value)
        let d = Number(desconto.value)
        let aplicandoDesconto = (d / 100) * p
        let novoPreco = p - aplicandoDesconto
        res.innerHTML = `<p>Preço atual ${p.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>O desconto - ${aplicandoDesconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Preço final ${novoPreco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    }
}