let pre = document.querySelector('#txtp')
let des = document.querySelector('#txtd')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',calcular)

function calcular(){
    if(pre.value.length == 0 || des.value.length == 0){
        window.alert('Valor inválido, por favor digite novamente')
    }else{
        res.style.display = 'block'
        let preco = Number(pre.value)
        let desc = Number(des.value)

        let desconto = (desc /100) * preco

        let precoFinal = preco - desconto

        res.innerHTML = `<p>Preço ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} </p>`
        res.innerHTML += `<p>desconto ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Preço com o desconto ${precoFinal.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`

    }
}