const num = document.querySelector('.txtn');
const btn = document.querySelector('.btn');
const tab = document.querySelector('.tab')


btn.addEventListener('click',function(){
    const n = Number(num.value);
    for(let i = 1; i <= 10; i++){
        const option = document.createElement('option');
        option.innerHTML = `${n} x ${i} = ${n * i}`
        tab.appendChild(option)
    }
})