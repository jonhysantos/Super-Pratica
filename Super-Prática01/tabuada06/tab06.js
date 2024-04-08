let num = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')
let tab = document.querySelector('#tabuada')

btn.addEventListener('click',verTabuada)

function verTabuada(){
    if(num.value.length == 0){
        alert('Número inválido.')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        for(let c = 1;c <= 10;c ++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
        num.value = ''
        num.focus()
    }
}