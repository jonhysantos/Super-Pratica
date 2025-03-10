const num = document.querySelector('.txtn');
const select = document.querySelector('.tab');
const btn = document.querySelector('.btn');

function seeTab(){
    if(num.value.length == 0){
        alert('Digite um número:')
    }else{
        for(let i = 1; i <= 10; i ++){
            const n = Number(num.value)
            const options = document.createElement('option');
            options.innerHTML = `${n} x ${i} = ${n * i}`
            select.appendChild(options)
        }
    }
}

btn.addEventListener('click',seeTab)