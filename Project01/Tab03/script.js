const num = document.querySelector('.txtn');
const btn = document.querySelector('.btn');
const tab = document.querySelector('.tab');


function seeTab(){
    if(num.value.length == 0){
        alert('Digite um número para ver a tabuada')
    }else{
        const n = Number(num.value)
        for(let i = 1; i <= 10; i ++){
            const option = document.createElement('option')
            option.innerHTML = `${n} x ${i} = ${n * i} `
            tab.appendChild(option)
        }
    }
}

btn.addEventListener('click',seeTab)