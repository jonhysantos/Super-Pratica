const txtp = document.getElementById('txtp');
const txtd = document.getElementById('txtd');
const btn = document.getElementById('btn');
const res = document.getElementById('res');


btn.addEventListener('click',function(){
    if(txtp.value.length === 0 || txtd.value.length === 0){
        alert('Por favor insira o preço e o desconto antes de calcualr.')
        return
    }

    const preco = txtp.value
    const desconto = txtd.value
    const valorDesconto = (desconto / 100 ) * preco
    const novoPreco = preco - valorDesconto
    res.innerHTML = `<p>Preço cheio ${preco}</p>`
    res.innerHTML += `<p>Desconto de ${valorDesconto}</p>`
    res.innerHTML += `<p>Preço com desconto ${novoPreco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
})