const txtn = document.getElementById('txtn');
const btn = document.getElementById('btn');
const tab = document.getElementById('tab');

btn.addEventListener('click',tabuada);
function tabuada(){
    if(txtn.length === 0){
        alert('Por favor, digite um número para ver a tabuada.');
    }else{
        tab.innerHTML = ''
        
        
        const n = Number(txtn.value)
        for(let c = 1; c <= 10; c ++){
            const option = document.createElement('option');
            option.innerHTML = `${n} x ${c} = ${n * c}`
            tab.appendChild(option);
        }
        txtn.value = ''
        txtn.focus()
    }
}