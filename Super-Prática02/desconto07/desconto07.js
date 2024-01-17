// Pegar as variáveis necessárias.
let preço = document.querySelector('#txtp')
let porcentagem = document.querySelector('#txtd')
let res = document.querySelector('#res')
let button = document.querySelector('#button')

// Action button.
button.addEventListener('click',calcular)

// function the action.
function calcular(){
    if(preço.value.length == 0 || porcentagem.value.length == 0){
        window.alert('Por favor, preencha os campos.')
    }else{
        let p = Number(preço.value)
        let desconto = (porcentagem.value  / 100 ) * p
        let novoPreço = p - desconto
        res.style.display = 'block'
        res.innerHTML = `<p>Preço atual ${p.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})} </p>`
        res.innerHTML += `<p>${desconto.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})} Off </p>`
        res.innerHTML += `<p>Preço com desconto ${novoPreço.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})} </p>`
    }
}