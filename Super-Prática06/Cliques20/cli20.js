const paragrafo = document.getElementById('paragrafo');
const btn = document.getElementById('btn');
const ulElement = document.getElementById('ulElement')

let contador = 0

btn.addEventListener('click',function(){
    contador ++
    const liElement = document.createElement('li');
    paragrafo.textContent = `${contador} cliques${contador !== 1 ? "s": ""}`
})