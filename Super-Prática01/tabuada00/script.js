const num = document.querySelector('.txtn');
const btn = document.querySelector('.btn');
const tab = document.querySelector('.tab');

function seeTab(){
    if(num.value.length == 0){
        alert('por favor digite um número')
    }else{
        tab.innerHTML = ''
        
        let n = Number(num.value);
        for(let c = 1;c <= 10; c ++){
            const item = document.createElement('option');
            item.innerHTML = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}

btn.addEventListener('click',seeTab)