let preço = document.querySelector('#txtp')
let des = document.querySelector('#txtd')
let res = document.querySelector('#res')
let btn = document.querySelector('#button')

// Ação do botão.
btn.addEventListener('click',calcular)

// Chamada para a função do botão.
function calcular(){
    if(preço.value.length == 0){
        window.alert('Por favor, insira um número válido.')
    }else{
        res.style.display = 'block'
        let p = Number(preço.value)
        let d = Number(des.value)
        let desconto = (d / 100) * p
        let novoPreço = p - desconto
        res.innerHTML = `<p>Preço ${p.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})}.</p>`
        res.innerHTML += `<p>- ${desconto.toLocaleString('pt-BR',{style: 'currency',currency: 'BRl'})}</p>`
        res.innerHTML += `<p>Preço com desconto ${novoPreço.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} </p>`
    }
    preço.value = ''
    des.value = ''
    preço.focus()
}