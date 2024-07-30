const n = document.getElementById('txtn');
const btn = document.getElementById('btn');
const tab = document.getElementById('tab');

btn.addEventListener('click',tabuada);
function tabuada(){
    if(n.value.length == 0){
        alert(`Por favor, insira um número`)
    }else{
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c ++){
            let item = document.createElement('option');
            item.textContent = `${n.value} x ${c} = ${n.value * c}`
            tab.appendChild(item)
        }
    }
}