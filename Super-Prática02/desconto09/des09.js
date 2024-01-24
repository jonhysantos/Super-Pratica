let preço = document.querySelector('#txtp')
let desconto = document.querySelector('#txtd')
let res = document.querySelector('#res')
let btn = document.querySelector('#btn')

// Ação do botão.
btn.addEventListener('click',calcular)

// Função do botão.
function calcular(){
    if(preço.value.length == 0 || desconto.value.length == 0){
        window.alert('Por favor, insira um número válido.')
    }else{
        let pre = Number(preço.value)
        let desc = Number(desconto.value)
        let d = (desc / 100  ) * pre
        let novoPreço = pre - d 
        res.style.display = 'block'
        res.innerHTML += `<p>Preço ${pre.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>- ${d.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}  Off</p>`
        res.innerHTML += `<p> ${novoPreço.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`


    }
    preço.value = ''
    desconto.value = ''
    preço.focus()
}