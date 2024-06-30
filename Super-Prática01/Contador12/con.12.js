const txti = document.getElementById('txti');
const txtp = document.getElementById('txtp');
const txtf = document.getElementById('txtf');
const btn = document.getElementById('btn');
const res = document.getElementById('res')

btn.addEventListener('click',function(){
    if(txti.value.length === 0 || txtp.value.length === 0 || txtf.value.length === 0){
        alert(`Por favor insira todos os números`)
        return
    }
    res.innerHTML = ''

    const i = Number(txti.value);
    const p = Number(txtp.value);
    const f = Number(txtf.value);

    if(i < f){
        // Ordem crescente
        for(let c = i; c <= f; c += p ){
            res.innerHTML += `\u{1f449} ${c} `
        }
    }else{
        // Oredem decrescente
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `\u{1f449} ${c}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
})