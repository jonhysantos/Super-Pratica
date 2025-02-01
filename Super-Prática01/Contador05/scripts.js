const be = document.querySelector('.txtb');
const en = document.querySelector('.txte');
const st = document.querySelector('.txts');
const res = document.querySelector('.res');
const btn = document.querySelector('.btn')


const counter = () => {
    if(be.value.length == 0 || en.value.length == 0 || st.value.length ==0){
        alert('Faltam dados');
    }else{
        res.innerHTML = ''
        let b = Number(be.value);
        let e = Number(en.value);
        let s = Number(st.value);
        if(b < e){
            // ascendign order
            for(let i = b; i <= e; i += s){
                res.innerHTML += `${i} \u{1f449}`
            }
        }else{
            // descending order
            for(let i = b; i >= e; i -= s){
                res.innerHTML += `${i} \u{1f449}`
            }   
        }
        res.innerHTML += `\u{1f3c1}`
        be.value = ''
        be.focus()
    }
}

btn.addEventListener('click',counter)