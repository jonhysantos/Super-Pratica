const be = document.querySelector('.txtb')
const en = document.querySelector('.txte')
const st = document.querySelector('.txts')
const res = document.querySelector('.res')
const btn = document.querySelector('.btn')

function counter(){
    if(be.value.length === 0 || en.value.length === 0 || st.value.length === 0){
        alert('Faltam dados')
    }else {
        const b = Number(be.value)
        const e = Number(en.value)
        const s = Number(st.value)

        if(b < e){
            for(let i = b; i <= e; i += s){
                res.innerHTML += ` ${i} \u{1f449}`
            }
        }else{
            for(let i = b; i >= e; i -= s){
                res.innerHTML += ` ${i} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

btn.addEventListener('click',counter)