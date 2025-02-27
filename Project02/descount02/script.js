const price = document.getElementById('txt-price');
const descount = document.getElementById('txt-descount');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res')

function currencyReal(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real
}

function calcDesc(){
    if(price.value.length == 0 || price.value < 0){
        alert(`Preço inexistente`)
    }else{
        const p = Number(price.value);
        const des = Number(descount.value);
        const getDescount = (des / 100) * p
        const priceFinal = p - getDescount
        res.innerHTML = `<p>Preço ${currencyReal(p)}</p>`
        res.innerHTML += `<p>O desconto - ${currencyReal(getDescount)}</p>`
        res.innerHTML += `<p>Preço final ${currencyReal(priceFinal)}</p>`
    }
}

btn.addEventListener('click',calcDesc)