const price = document.querySelector('#txt-price');
const getOff = document.querySelector('#txt-descount');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res')

function currencyReal(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real
}

const descountCalcularor = () => {
    if(price.value.length == 0 || getOff.value.length == 0){
        alert('Favor preencha os campos')
    }else{
        res.style.display = 'block'
        let p = Number(price.value);
        let g = Number(getOff.value);
        let descount = (g / 100) * p
        let priceWithDecount = p - descount
        res.innerHTML = `<p>${currencyReal(p)}</p>`
        res.innerHTML += `<p>O desconto - ${currencyReal(descount)}</p>`
        res.innerHTML += `<p>Preço com desconto ${currencyReal(priceWithDecount)}</p>`
    }
}

btn.addEventListener('click',descountCalcularor)