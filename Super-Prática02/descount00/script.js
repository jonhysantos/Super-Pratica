const price = document.querySelector('#txt-price');
const des = document.querySelector('#txt-descount');
const btn = document.querySelector('.btn')
const res = document.querySelector('.res')

function calcDesc(){
    if(price.value.length == 0 || des.value.length == 0){
        alert('Por favor preencha o campor')
        price.focus()
    }else{
        const p = Number(price.value)
        const descount = Number(des.value);
        const getDesc = (descount / 100) * p
        const priceWithDesc = p - getDesc
        res.innerHTML = `<p>Preço ${p}</p>`
        res.innerHTML += `Desconto - ${getDesc}</p>`
        res.innerHTML += `<p>Preço com desconto${priceWithDesc}</p>`
    }
}

btn.addEventListener('click',calcDesc)