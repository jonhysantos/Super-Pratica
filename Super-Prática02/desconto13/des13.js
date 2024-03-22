let pre = document.querySelector('#txtp')
let des = document.querySelector('#txtd')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',calcular)

function calcular(){
    if(pre.value.length == 0 || des.value.length == 0){
        window.alert('Por favor digite o preço e o desconto que deseja aplicar')
    }else{
        let preço = Number(pre.value)
        let desconto = Number(des.value)

        let aplicarDesconto = (desconto / 100) * preço
        let novoPreço = preço - aplicarDesconto

        res.innerHTML = `<p>Preço ${preço.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>desconto ${aplicarDesconto.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Novo preço ${novoPreço.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</p>`
    }
    
}