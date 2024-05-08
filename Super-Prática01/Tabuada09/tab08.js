let num = document.querySelector('#txtnum')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')
let tab = document.querySelector('#tab')

btn.addEventListener('click',function(){
    if(num.value.length == 0){
        alert('Número inválido.')
        return
    }
    tab.innerHTML = ''
    num.focus()
    let n = Number(num.value)
    for(let c = 1; c <= 10; c ++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
    }
    num.value = ''
})