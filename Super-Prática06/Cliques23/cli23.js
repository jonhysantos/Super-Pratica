const paragrafo = document.getElementById('paragrafo');
const btn = document.getElementById('btn');
let contador = 0;

btn.addEventListener('click',function(){
    contador ++
    paragrafo.textContent = `${contador} clique${contador !==1 ? "s" : ""}`
})