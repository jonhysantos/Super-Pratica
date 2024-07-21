const txtp = document.getElementById('txtp');
const txtd = document.getElementById('txtd');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click',function(){
    if(txtp.value.length === 0 || txtd.value.length === 0){
        alert(`Por insira os valores solicitado`)
        return
    }

    const preco = Number(txtp.value);
    const desconto = Number(txtd.value);
    const des = (desconto / 100) * preco
    const novoPreco = preco - des
    res.innerHTML = `<p>Preço sem desconto ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    res.innerHTML += `<p>Desconto - ${des.toLocaleString('pt-BR',{style:"currency",currency:'BRL'})}</p>`
    res.innerHTML += `<p>Preço final ${novoPreco.toLocaleString('pt-BR',{style:'currency',currency:"BRL"})}</p>`


})