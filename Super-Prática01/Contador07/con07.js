const txti = document.querySelector('#txti')
const txtf = document.querySelector('#txtf')
const txtp = document.querySelector('#txtp')
let res = document.querySelector('#res')
let btn = document.querySelector('#btn')

btn.addEventListener('click',contar)

function contar(){
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        alert('Por favor peencher todos os campos.')
    }else{
        res.innerHTML = ''
        let i = Number(txti.value)
        let p = Number(txtp.value)
        let f = Number(txtf.value)
        if(i < f){
            // Ordem crescente
            for(let c = i;c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            // ordem decrescente.
            for(let c = i;c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        txti.value = ''
        txtp.value =''
        txtf.value = ''
        txti.focus()
    }
}