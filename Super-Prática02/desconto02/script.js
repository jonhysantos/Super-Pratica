const price = document.querySelector('#txt-price');
const desc = document.querySelector('#txt-descount');
const res = document.querySelector('.res');
const btn = document.querySelector('.btn');

function currencyReal(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    return real
}

const calcDescount = () => {
    if(price.value.length == 0 || desc.value.length == 0){
        alert('Por favor preencha os campos')
        return
    }
    const p = Number(price.value);
    const d = Number(desc.value);
    const descount = (d/100) * p
    const priceWithDesc = p - descount
    res.style.display = 'block'
    res.innerHTML = `<p>Preço:${currencyReal(p)}</p>`
    res.innerHTML += `<p>Desconto - ${currencyReal(descount)}</p>`
    res.innerHTML += `<p>Preço final ${currencyReal(priceWithDesc)} com ${d}% Off </p>`
    price.value = ''
    desc.value = ''
    price.focus()
}

btn.addEventListener('click',calcDescount)