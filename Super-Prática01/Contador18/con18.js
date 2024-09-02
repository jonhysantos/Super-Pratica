const txti  = document.getElementById('txti');
const txtf = document.getElementById('txtf');
const txtp = document.getElementById('txtp');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click',contar);
function contar(){
    if(txti.value === 0 || txtf.value === 0 || txtp.value === 0){
        alert(`Por favor, preencha os requisitos`)
    }else{
        const i = Number(txti.value);
        const f = Number(txtf.value);
        const p = Number(txtp.value);
        res.innerHTML = ''
        if(i < f){
            // Ordem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            for(let c = i; c >= f; c -= p){
                //Ordem decrescente.
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        txti.value = ''
        txti.focus()
    }
}