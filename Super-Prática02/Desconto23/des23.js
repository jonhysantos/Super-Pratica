const txtp = document.getElementById('txtp');
const txtd = document.getElementById('txtd');
const btn = document.getElementById('btn');
const res = document.getElementById('res');


btn.addEventListener('click',function(){
    if(txtp.value.length === 0 ||txtd.value.length ===0 ){
        alert('Por favor insira os valores para ver o desconto.')
        return
    }
    const preco = txtp.value
    const des = txtd.value
    const desconto = (des / 100 ) * preco
    const novoPreco = preco - desconto
    res.innerHTML = `<p>Preço ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `<p>Desconto ${desconto.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}</p>`
    res.innerHTML += `<p>Novo preço ${novoPreco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
})