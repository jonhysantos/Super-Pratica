const price = document.querySelector('#txt-price');
const desc = document.querySelector('#txt-descount');
const res = document.querySelector('.res')
const btn = document.querySelector('.btn')


function calcDesc(){
    if(price.value.length == 0 || desc.value == 0){
        alert('Por favor preencha os campos')
    }else{
        const p = Number(price.value);
        const des = Number(des.value);
        const descount = (des /100) * p
        const priceWithDescount = p - des
        res.style.display = 'block'
        res.innerHTML = `<p>Preço ${p}</p>`
        res.innerHTML += `<p>Desconto - ${descount}</p>`
        res.innerHTML += `<p>Preço com desconto ${priceWithDescount} </p>`
        
    }
}

btn.addEventListener('click',calcDesc)