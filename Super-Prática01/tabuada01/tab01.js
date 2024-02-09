let num = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')
let tab = document.querySelector('#seltab')

// Ação do botão.
btn.addEventListener('click',tabuada)

// Função do botão.
function tabuada(){
    if(num.value.length == 0){
        window.alert('Por favor, insira um número válido.')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        res.style.display = 'block'
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
    num.value = ''
    num.focus()
}