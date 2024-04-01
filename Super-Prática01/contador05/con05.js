let ini = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',contar)

function contar(){
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Faltam dados, verifique e tente novamente.')
    }else{
        res.innerHTML = ''

        res.style.display = 'block'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            // Ordem crescente
            for(let c = i;c < f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            // Ordem decrescente
            for(let c = i;c > f;c -= p)[
                res.innerHTML += `${c} \u{1f449}`
            ]
        }
        res.innerHTML += `\u{1f3c1}`
        ini.value = ''
        fim.value = ''
        passo.value = ''
        ini.focus()
    }
}