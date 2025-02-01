const price = document.querySelector('#txt-price');
const descount = document.querySelector('#txt-descount');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

function currencyReal(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real
}

const getDescount = () => {
    if(price.value.length == 0 || descount.value.length == 0){
        alert('Preencha os campos')
    }else{
        let p = Number(price.value);
        let d = Number(descount.value);
        let getOff = (d / 100) * p
        let newPrice = p - getOff
        res.style.display = 'block'
        res.innerHTML = `Preço ${currencyReal(p)}</p`
        res.innerHTML += `<p>Desconto -${currencyReal(getOff)}</p>`
        res.innerHTML += `<p>Preço com desconto ${currencyReal(newPrice)} com ${d}% Off`
    }
}


btn.addEventListener('click',getDescount)