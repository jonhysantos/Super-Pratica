const p = document.querySelector('.p-count');
const btn = document.querySelector('.btn-counter');

let counter = 0;

btn.addEventListener('click',function() {
    counter ++
    p.textContent = `${counter} clique${counter !== 1 ? "s" : ""}`
})