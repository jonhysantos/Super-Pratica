const txtp = document.getElementById('txtp');
const txtd = document.getElementById('txtd');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click',function(){
    if(txtp.value.length === 0 || txtd.value.length === 0){
        alert('Por favor insira os dados corretamente.')
        return 
    }

    const preco = Number(txtp.value)
    const des = Number(txtd.value)
    const desconto = Number(des / 100) * preco
    const novoPreco = preco - desconto
    res.innerHTML = `<p>Preço: ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `<p>Desconto - ${desconto.toLocaleString("pt-BR",{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `<p>Novo preço ${novoPreco.toLocaleString('pt-BR',{style:'currency',currency:"BRL"})}</p>`
})