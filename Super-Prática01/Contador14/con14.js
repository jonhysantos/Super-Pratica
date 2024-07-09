const txti = document.getElementById('txti');
const txtf = document.getElementById('txtf');
const txtp = document.getElementById('txtp');
const res = document.getElementById('res');
const btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    if(txti.value.length === 0 || txtf.value.length === 0 || txtp.value.length === 0){
        alert('Faltam dados, por favor preencha.')
        return
    }

    const i = Number(txti.value)
    const f = Number(txtf.value)
    const p = Number(txtp.value)
    

    if(i < f){
        // Ordem crescente
        for(let c = i; c < f; c += p){
            res.innerHTML += `\u{1f449} ${c}`
        }
    }else{
        for(let c = i; c > f; c -= p){
            res.innerHTML += `\u{1f449} ${c}`
        }
    }
    res.innerHTML += ` \u{1f3c1}`
    txti.value = ''
    txtf.value = ''
    txtp.value = ''
    txti.focus()
})