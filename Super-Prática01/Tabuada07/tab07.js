let txtn = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let tab = document.querySelector('#tabuada')
let res = document.querySelector('#res')

btn.addEventListener('click',verTabuada)

function verTabuada(){
    if(txtn.value.length == 0){
        alert('Por favor, digite um número.')
        return
    }
    let n = Number(txtn.value)
    for(let c = 1;c <= 10;c ++){
        let item = document.createElement('option')
        item.innerHTML = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
        tab.style.padding = '10px'
        tab.style.width = '250px'
        tab.style.fontSize = '1.4em'

    }
}