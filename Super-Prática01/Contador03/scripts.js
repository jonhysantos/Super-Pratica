const beg = document.querySelector('.txtb');
const en = document.querySelector('.txte');
const st = document.querySelector('.txts');
const btn = document.querySelector('.btn');
let res = document.querySelector('.res')

function count(){
    if(beg.value.length == 0 || en.value.length == 0 || st.value.length == 0){
        alert('Por favor preencha todos os campor')
    }else{
        res.innerHTML = ''
        let i = Number(beg.value)
        let e = Number(en.value)
        let s = Number(st.value)
        if(i < e){
            for(let c = i; c <= e; c += s){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            for(let c = i; c >= e; c -= s){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        beg.value = ''
        en.value = ''
        st.value = ''
        beg.focus()
    }
}

btn.addEventListener('click',count)