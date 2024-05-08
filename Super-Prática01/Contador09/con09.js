let ini = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res = document.querySelector('#res')
let btn = document.querySelector('#btn')

btn.addEventListener('click',function(){
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Espaço em brando, preencha todas as lacunas')
        return

    }

    res.innerHTML = ''
    
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    

    if(i < f){
        for(let c = i;c <= f;c += p){
            // Ordem crescente
            res.innerHTML += ` ${c}  \u{1f449}`
        }
    }else{
        // Ordem decrescente
        for(let c = i; c >= f;c -= p){
            res.innerHTML += ` ${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
    ini.value = ''
    fim.value = ''
    passo.value = ''
    ini.focus()
    
})
