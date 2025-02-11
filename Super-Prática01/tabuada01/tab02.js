const num = document.querySelector('.txtn');
const tab = document.querySelector('.tab');
const btn = document.querySelector('.btn');

function seeTab(){
    if(num.value.langth == 0){
        alert('Digite um número')
    }else{
        let n = Number(num.value);
        for(let c = 1; c <= 10; c ++){
            let item = document.createElement('option')
            item.innerHTML += `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}

btn.addEventListener('click',seeTab)