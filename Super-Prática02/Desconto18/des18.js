let txtp = document.querySelector('#txtp')
let txtd = document.querySelector('#txtd')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',calcular)

function calcular(){
    if(txtp.value == 0 || txtd.value == 0){
        alert('Caixa em branco, verifique e tente novamente.')
    }else{
        let preco = Number(txtp.value)
        let porcentagemDesconto = Number(txtd.value)

        let desconto = (porcentagemDesconto /100) * preco

        let precoFinal = preco - desconto

        res.innerHTML = `<p>Preço ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Desconto ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Preço com desconto ${precoFinal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
    }
}