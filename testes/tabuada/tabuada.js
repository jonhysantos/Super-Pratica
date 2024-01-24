let num = document.querySelector('#txtn')
let tab = document.querySelector("#seltab")
let res = document.querySelector("#res")
let btn = document.querySelector('#btn')

// Ação do botão.
btn.addEventListener('click',tabuada)

function tabuada(){
    if(num.value.length == 0){
        window.alert('Por favor, digite um númer para ver a sua tabuada.')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        res.style.display = 'block'
        tab.style.padding = '10px'
        tab.style.fontSize = '1.4em'
        tab.style.background = 'blue'
        tab.style.color = 'white'
        for(let c = 1; c <= 10; c ++){
          let item = document.createElement('option')
          item.text = `${n} x ${c} = ${n * c}`
          tab.appendChild(item)  
        }
    }
    num.value = ''
    num.focus()
}
