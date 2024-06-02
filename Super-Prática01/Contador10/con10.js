const txti = document.getElementById('txti');
const txtp = document.getElementById('txtp');
const txtf = document.getElementById('txtf');
const btn = document.getElementById('btn')
const res = document.getElementById('res')

btn.addEventListener('click',function(){
    const i = Number(txti.value)
    const p = Number(txtp.value) 
    const f = Number(txtf.value)
    if(txti.value.length === 0 || txtp.value.length == 0 || txtp.value.length === 0){
        alert('Número inválido')
        return
    }

    if(i < f){
        // Ordem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
    txti.value = ''
    txtp.value = ''
    txtf.value = ''
    txti.focus()
})