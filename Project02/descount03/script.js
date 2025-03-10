const price = document.querySelector('#txt-price');
const desc = document.querySelector('#txt-descount');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res')

function calcDescount(){
    if(price.value.length !== 0 || desc.value.length !==  0){
        const p = Number(price.value);
        const des = Number(desc.value);
        const descount = (des/100) * p
        const priceFinal = p - descount
        res.innerHTML = `<p>Preço final ${priceFinal}</p>`
    }else{
        alert('Preencha os campos')
        
    }
}

btn.addEventListener('click',calcDescount)