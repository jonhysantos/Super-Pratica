const txti = document.getElementById('txti');
const txtf = document.getElementById('txtf');
const txtp = document.getElementById('txtp');
const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click',contar);
function contar(){
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        alert('Por favor preencha todos os valores')
    }else{
        const i = Number(txti.value);
        const f = Number(txtf.value);
        const p = Number(txtp.value);
        if(i < f){
            // Ordem crescente
            for(let c = i; c < f; c += p){
                res.innerHTML += `\u{1f449} ${c}`
            }
        }else{
            // Ordem decrescente
            for(let c = i; c > f; c -= p){
                res.innerHTML += `\u{1f449} ${c}`
            }
        }
        res.innerHTML += ` \u{1f3c1}`
    }
}