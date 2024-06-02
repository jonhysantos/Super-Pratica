const txtn = document.getElementById('txtn');
const btn = document.getElementById('btn');
const tab = document.getElementById('tab');
const res = document.getElementById('res');

btn.addEventListener('click',function(){
    if(txtn.value.length === 0){
        alert('Por favor digite um número para ver a sua tabuada')
        return
    }
    
    const num = Number(txtn.value)
    tab.innerHTML = ''
    for(let c = 1; c <= 10; c++){
        res.style.display = 'block'
        const option = document.createElement('option');
        option.textContent = `${num} x ${c} = ${num * c}`
        tab.appendChild(option)
    }
    txtn.value = ''
    txtn.focus()
     
})