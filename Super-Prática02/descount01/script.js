const price = document.querySelector('#txt-p');
const descount = document.querySelector('#txt-d');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

function currencyReal(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real
}

function desc(){
    if(price.value.length === 0 || descount.value.length === 0){
        alert('error,faltam dados')
    }else{
        const p = Number(price.value);
        const d = Number(descount.value);
        const sumDescount = (d / 100) * p
        const priceFinal = p - sumDescount
        res.innerHTML = `<p>Preço ${currencyReal(p)}</p>`
        res.innerHTML += `<p>Desconto - ${currencyReal(sumDescount)}</p>`
        res.innerHTML += `<p>Preço com desconto ${currencyReal(priceFinal)}</p>`
    }
}

btn.addEventListener('click',desc)