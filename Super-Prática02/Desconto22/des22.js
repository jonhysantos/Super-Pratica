const txtp = document.getElementById('txtp');
const txtd = document.getElementById('txtd');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click',function(){
    if(txtp.value.length === 0 || txtd.value.length === 0){
        alert('Número inválido.')
        return
    }
    const preco = Number(txtp.value);
    const porDesc = Number(txtd.value);

    const desconto = (porDesc / 100) * preco
    const AplicarDesconto = preco - desconto
    res.style.display = 'block'
    res.innerHTML += `<p>Preço atual ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `<p>Desconto - ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `Preço com desconto ${AplicarDesconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
    txtp.value = ''
    txtd.value = ''
    txtp.focus()
})