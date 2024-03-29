const txtp = document.querySelector('#txtp')
const txtd = document.querySelector('#txtd')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')

btn.addEventListener('click',calcular)

function calcular(){
    if(txtp.value.length == 0 || txtd.value.length == 0){
        alert('Por favor, insira um número válido.')
    }else{
        btn.style.border = '2px solid white'
        let preco = Number(txtp.value)
        let desconto = Number(txtd.value)
        let des = (desconto / 100) * preco
        let novoPreco = preco - des
        res.style.display = 'block'
        res.innerHTML = `<p>Preço ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Desconto ${des.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Preço final ${novoPreco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
        txtp.value = ''
        txtd.value= ''
        txtp.focus()

    }
}