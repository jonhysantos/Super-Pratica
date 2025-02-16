const price = document.querySelector('#txt-price');
const descount = document.querySelector('#txt-descount');
const btn = document.querySelector('.btn')
const res = document.querySelector('.res')

function currencyReal(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real
}

function calcDescount(){
    if(price.value.lenght === 0 || descount.value.lenght === 0 ){
        alert(`Faltam dados`)
    }else{
        const p = Number(price.value)
        const des = Number(descount.value)
        const getDescount = (des/100) * p
        const priceFinal = p - getDescount
        res.style.display = 'block'
        res.innerHTML = `<p>Preço ${currencyReal(p)}</p>`
        res.innerHTML += `<p>Desconto - ${currencyReal(getDescount)}</p>`
        res.innerHTML += `<p>Preço com desconto ${currencyReal(priceFinal)}</p>`
    }
}

btn.addEventListener('click',calcDescount)