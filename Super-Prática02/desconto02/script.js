const price = document.querySelector('#txt-price')
const des = document.querySelector('#txt-descount');
const btn = document.querySelector('.btn')
const res = document.querySelector('.res');

function getDecount(){
    if(price.value.length == 0 || des.value.length == 0){
        alert('Faltam dados')
    }else{
        let p = Number(price.value)
        let descount = Number(des.value)
        let getOff = (descount / 100) * p
        let priceFinal = p - getOff
        res.style.display = 'block'
        res.innerHTML = `<p>Preço ${p}</p>`
        res.innerHTML += `<p>Desconto - ${getOff}</p>`
        res.innerHTML += `<p>Preço com desconto ${priceFinal} </p>`
    }
}
btn.addEventListener('click',getDecount)