const num = document.querySelector('.txtn');
const select = document.querySelector('.tab');
const btn = document.querySelector('.btn')

function tab(){
    if(num.value.length == 0){
        alert('error, digite um número')
    }else{
        const n = Number(num.value);
        for(let c = 1; c <= 10; c ++){
            const option = document.createElement('option');
            option.innerHTML = `${n} x ${c} = ${n * c}`
            select.appendChild(option)
        }
    }
}

btn.addEventListener('click',tab)