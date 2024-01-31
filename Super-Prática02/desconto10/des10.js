let preço = document.querySelector('#txtp')
let des = document.querySelector('#txtd')
let res = document.querySelector('#res')
let btn = document.querySelector('#btn')

// Action to button.
btn.addEventListener('click',calcular)

// function to action.
function calcular(){
    if(preço.value.length == 0 || des.value.length == 0){
        window.alert('Por favor, insira valores para calcular.')
    }else{
        res.innerHTML = ''
        res.style.display = 'block'
        // transform to number
    let p = Number(preço.value)
    let d = Number(des.value)
    // Get paid off 
    let desconto = (d / 100) * p
    let novoPreço = p - desconto
        res.innerHTML = `<p>Novo preço ${novoPreço.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}</p>`
        res.innerHTML += `<p> - ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Preço ${p.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} </p>`
        res.innerHTML += `<p>${d} % Off </p>`
    }
    preço.value = ''
    des.value = ''
    preço.focus()

}