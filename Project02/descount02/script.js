const price = document.getElementById('txt-price');
const desc = document.getElementById('txt-descount');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

function currencyReal(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real
}

function calcDescount(){
    if(price.value.length == 0){
        alert('Digite o preço')
        price.focus()
        price.style.border = '1px solid red'
        price.style.outline = 'none'
    }else if(desc.value.length == 0){
        alert('Digite a porcentagem de desconto')
        desc.style.border = '1px solid red'
        desc.focus()

    }else{
        const p = Number(price.value)
        const des = Number(desc.value);
        const descount = (des / 100 ) * p
        const priceFinal = p - descount
        res.innerHTML = `<p>Preço ${currencyReal(p)}</p>`
        res.innerHTML += `<p>Desconto - ${currencyReal(descount)}</p>`
        res.innerHTML += `<p>Preço com desconto ${currencyReal(priceFinal)}</p>`
    }
}

btn.addEventListener('click',calcDescount)