let num = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let tab = document.querySelector('#tab')
let res = document.querySelector('#res')

btn.addEventListener('click',verTabuada)

function verTabuada(){
    if(num.value.length == 0){
        window.alert('Por favor, insirir um número:')
        return
    }
    tab.innerHTML = ''
    res.style.display = 'block'
    let n = Number(num.value)
    for(let c = 1 ; c <= 10; c ++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
    }
    num.value = ''
    num.focus()
}