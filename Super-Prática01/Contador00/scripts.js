const be = document.querySelector('.txtb');
const en = document.querySelector('.txte');
const st = document.querySelector('.txts');
const res = document.querySelector('.res');
const btn = document.querySelector('.btn');

function counter(){
    if(be.value.length == 0 || en.value.length == 0 || st.value.length == 0){
        alert('Por favor preencha os dados')
    }else{
        const b = Number(be.value);
        const e = Number(en.value);
        const s = Number(st.value);
        if(b < e){
            // ascending order
            for(let c = b; c <= e; c += s){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            // descending order
            for(let c = b; c >= e; c -= s){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

btn.addEventListener('click',counter)