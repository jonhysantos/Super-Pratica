const n = document.getElementById('txtn');
const btn = document.getElementById('btn');
const tab = document.getElementById('tab');
const res = document.getElementById('res')

btn.addEventListener('click',function(){
    if(n.value.length === 0){
        alert(`Por favor insira um número para ver a sua tabuada`)
        return
    }
    tab.innerHTML = ''
    let num = Number(n.value)
    for(let c = 1; c <= 10; c ++){
        const option = document.createElement('option')
        option.innerHTML = `${num} x ${c} = ${num * c}`
        tab.appendChild(option)
        n.value = ''
        n.focus()
    }
})