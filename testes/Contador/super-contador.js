let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res = document.querySelector('#res')
let btn = document.querySelector('#btn')

// Ação do botão.
btn.addEventListener('click',contar)

// Função do botão.
function contar(){
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Por favor,insira números para contar.')
    }else{
        res.innerHTML = ''
        res.style.display = 'block'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            // ordem crescente.
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else{
            // Ordem descrecente.
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}