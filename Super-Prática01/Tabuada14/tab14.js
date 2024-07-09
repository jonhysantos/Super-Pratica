const num = document.getElementById('txtn');
const btn = document.getElementById('btn');
const tab = document.getElementById('tab');
const res = document.getElementById('res');

btn.addEventListener('click',function(){
    if(num.value.length == 0){
        alert('Por favor, insira um número')
        return
    }
    tab.innerHTML = ''

    const n = Number(num.value)
    for(let c = 1; c <= 10; c ++){
        const item = document.createElement('option');
        item.textContent = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
    }
    num.value = ''
    num.focus()
})