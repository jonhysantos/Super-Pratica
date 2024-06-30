const num = document.getElementById('txtn');
const btn = document.getElementById('btn');
const tabuada = document.getElementById('tabuada');
const res = document.getElementById('res');

btn.addEventListener('click',function(){
    let n = Number(num.value)
    if(num.value.length === 0){
        alert('Por favor insira um número.')
        return
    }
    for(let c = 1; c <= 10; c ++){
        let item = document.createElement('option');
        item.textContent= `${n} x ${c} = ${n * c}`
        tabuada.appendChild(item)
    }
})