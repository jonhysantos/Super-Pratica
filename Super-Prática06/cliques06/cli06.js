let paragrafo = document.querySelector('#paragrafo')
let btn = document.querySelector('#btn')

let contador = 0

btn.addEventListener('click',function() {
    contador ++
    paragrafo.textContent = `${contador} clique${contador !== 1 ? "s" : ""}`
})