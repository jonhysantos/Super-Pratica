const num = document.querySelector('.txtn');
const btn = document.querySelector('.btn');
const tab = document.querySelector('.tabuada');
let res = document.querySelector('.res');


const seeTab = () => {
    if(num.value.length == 0){
        alert('Faltam dados')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        for(let c = 1; c <= 10; c ++){
         let item = document.createElement('option')
         item.innerHTML = `${n} x ${c} = ${n * c}` 
         tab.appendChild(item)  
        }
        
    }
    num.value = ''
    num.focus()
}

btn.addEventListener('click',seeTab)