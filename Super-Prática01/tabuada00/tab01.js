const num = document.querySelector('.txtn');
const res = document.querySelector('.res');
const btn = document.querySelector('.btn');
const tab = document.querySelector('.tabuada');

function seeTab(){
    if(num.value.length == 0){
        alert('Por favor deigite um número para ver a tabuada')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value);
        for(let c = 1; c <= 10; c ++){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
        num.value = ''
        num.focus()
    }
}

btn.addEventListener('click',seeTab)