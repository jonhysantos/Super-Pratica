const price = document.querySelector('#txt-price');
const des = document.querySelector('#txt-descount');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

function currencyReal(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real

}

function clacDesc(){
    if(price.value.length == 0 || des.value.length == 0){
        alert('Por favor preencha os campos')
    }else{
        const p = Number(price.value);
        const d = Number(des.value);
        const desc = (d/100) * p
        const priceFinal = p - desc
        res.style.display = 'block'
        res.innerHTML = `<p>Preço ${currencyReal(p)}</p>`
        res.innerHTML += `<p>Desconto - ${currencyReal(desc)}</p>`
        res.innerHTML += `<p>Preço com desconto ${currencyReal(priceFinal)} </p>`
    }
}

btn.addEventListener('click',clacDesc)