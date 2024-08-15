const txti = document.getElementById('txti');
const txtf = document.getElementById('txtf');
const txtp = document.getElementById('txtp');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click',contar);
function contar(){
    const i = Number(txti.value);
    const f = Number(txtf.value);
    const p = Number(txtp.value);
    res.innerHTML = ''
    if(i !== '' || f !== '' || p !== ""){
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `\u{1f449} ${c}`
            }
        }else{
            for(let c = i; c >= f; c -= p ){
                res.innerHTML += `\u{1f449} ${c}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        txti.value = ''
        txtf.value = ''
        txtp.value = ''
    }else{
        alert(`Por favor, insira todos os dados necessáros.`)
    }
}
