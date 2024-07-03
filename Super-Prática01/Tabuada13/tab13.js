const num = document.getElementById('txtn');
const btn = document.getElementById('btn');
const res = document.getElementById('res')
const tabuada = document.getElementById('tabuada');

btn.addEventListener('click',function(){
    if(num.value.length === 0){
        alert(`Por favor, insira um número`)
        return
    }
    tabuada.innerHTML = ''


    for(let c = 1; c <= 10; c++){

        let item = document.createElement('option');
        item.innerHTML = `${num.value} x ${c} = ${ num.value * c}`
        tabuada.appendChild(item)
        
    }
    num.value = ''
    num.focus();
})