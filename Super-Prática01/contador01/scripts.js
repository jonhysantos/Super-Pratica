const begin = document.querySelector('.txti');
const end = document.querySelector('.txtf');
const step = document.querySelector('.txtp');
const btn = document.querySelector('.btn');
let res = document.querySelector('.res')

function count() {
    if (begin.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        alert('Campo em branco, por favor preencha todos os campor ')
    } else {
        let i = Number(begin.value)
        let f = Number(end.value)
        let p = Number(step.value)
        if (i < f) {
            // ascending order
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            // descending order
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
    }
}

btn.addEventListener('click',count)

