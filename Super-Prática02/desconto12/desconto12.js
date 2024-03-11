let preço = document.querySelector('#txtp')
let porcentagemD = document.querySelector('#txtd')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click', calcular)

function calcular(){
    if(preço.value.length == 0 || porcentagemD.value.length == 0 ){
        window.alert('Por favor, digite um número válido.')
    }else{
        let p = Number(preço.value)
        let d = Number(porcentagemD.value)

        let desconto = (d / 100) * p

        let novoPreço = p - desconto

        res.style.display = 'block'
        res.innerHTML = `<p>Preço ${p.toLocaleString('pt-BR', {style: 'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Desconto ${desconto.toLocaleString('pt-BR',{style: 'currency', currency:'BRL' })}</p>`
        res.innerHTML += `<p>Novo preço ${novoPreço.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    }
    preço.value = ''
    preço.focus()
}