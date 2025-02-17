const num = document.querySelector('.txtn');
const btn = document.querySelector('.btn');
const tab = document.querySelector('.tab');

function seeTab(){
    if(num.value === 0 ){
        alert('Digite um número:')
    }else{
        const n = Number(num.value);
        for(let c = 1; c <= 10; c ++){
            const item = document.createElement('option');
            item.innerHTML = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}

btn.addEventListener('click',seeTab)