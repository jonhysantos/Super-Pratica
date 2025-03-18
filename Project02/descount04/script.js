const price = document.querySelector('#txt-price');
const desc = document.querySelector('#txt-descount');
const res = document.querySelector('.res');
const btn = document.querySelector('.btn')

function getDecount(){
  if(price.value.length === 0 || desc.value.length === 0){
    alert('faltam dados')

}else{
    const p = Number(price.value);
    const d = Number(desc.value);
    const descount = (d/100) * p
    const priceFinal = p - descount
    res.innerHTML = `<p>Preço final ${priceFinal}</p>`
}
  
}


btn.addEventListener('click',getDecount)

