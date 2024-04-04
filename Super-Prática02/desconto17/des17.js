let pre = document.querySelector("#txtp")
let desc = document.querySelector('#txtd')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',calcularDesconto)

function calcularDesconto(){
    if(pre.value.length == 0 || desc.value.length == 0){
        alert('Digite valores antes de calcular')
        return
    }

    let p = Number(pre.value)
    let d = Number(desc.value)

    let desconto = (d / 100 ) * p
    let descontoAplicado = p - desconto

    res.innerHTML = `<p>Preço sem desconto ${p.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} </p>`
    res.innerHTML += `<p>O desconto foi de ${desconto.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</p> `
    res.innerHTML += `<p>Preço com o desconto ${descontoAplicado.toLocaleString('pt-BR',{style: 'currency', currency:'BRl'})}</p`
    pre.value = ''
    desc.value = ''
    pre.focus()


    
}