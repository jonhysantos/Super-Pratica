const p = document.querySelector('.p');
const btn = document.querySelector('.btn');
let counter = 0;

btn.addEventListener('click',function(){
    counter ++
    p.innerHTML = `${counter} clique${counter !== 1 ? "s" : ''}`
})