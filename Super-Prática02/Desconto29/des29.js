const txtp = document.getElementById('txtp');
const txtd = document.getElementById('txtd');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click',calcular);
function calcular(){
    if(txtp.length === 0 || txtd.length === 0){
        alert(`Por favor, insira o preço e o desconto a ser aplicado.`);
    }else{
        const preco = Number(txtp.value);
        const des = Number(txtd.value);
        const desconto = (des / 100) * preco
        const novoPreço = preco - desconto
        res.innerHTML = `<p>Preço sem desconto ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} </p>`
        res.innerHTML += `<p> Desconto ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
        res.innerHTML += `<p>Novo preço com desconto aplicado ${novoPreço.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
    }
}