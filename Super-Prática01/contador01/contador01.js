let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

// Ação do botão
btn.addEventListener('click',contar)

// Função da ação.
function contar(){
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Campor em branco, por favor preencha os campos.')
    }else{
        res.innerHTML = ''
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            // ordem crescente.
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449} `
            }
        }else{
            // ordem decrescente.
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        inicio.value = ''
        fim.value  = ''
        passo.value = ''
        inicio.focus()
    }
}