const num = document.querySelector('.txtn');
const btn = document.querySelector('.btn');
const select = document.querySelector('.tab');

function seeTab(){
    if(num.value.length == 0){
        alert(`Digite um número`)
    }else{
        for(let i = 1; i <= 10; i ++){
            const option = document.createElement('option');
            option.innerHTML = `${num.value} x ${i} = ${num.value * i}`
            select.appendChild(option)
        }
    }
}

btn.addEventListener('click',seeTab)