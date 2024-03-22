let numero = document.querySelector('#txtn')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')
let lista = document.querySelector('#lista')


btn.addEventListener('click',verTabuada)

function verTabuada(){
    if(numero.value.length == 0){
        window.alert('Por favor, digite um número para ver a sua tabuada.')
    }else{
        res.style.display = 'block'
        lista.innerHTML = ''
        lista.style.width = '250px'
        lista.style.fontSize = '1.3em'
        lista.style.padding = '7px'
        lista.style.background = 'blue'
        lista.style.color = 'white'
        let n = Number(numero.value)
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n * c} `
            lista.appendChild(item)
        }
        numero.value = ''
        numero.focus()
    }
}