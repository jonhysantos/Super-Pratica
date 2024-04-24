let txti = document.querySelector('#txti')
let txtf = document.querySelector('#txtf')
let txtp = document.querySelector('#txtp')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',contar)

function contar(){
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        alert('Caixa em branco.')
    }else{
        res.innerHTML = ''
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)
        if(i < f){
            // Ordem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}` 
            }
        }else{
            // Ordem decrescente.
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        txti.value = ''
        txtf.value = ''
        txtp.value = ''
        txti.focus()
    }
}