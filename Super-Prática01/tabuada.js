// tabuada //

let numero = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let res = document.querySelector('.res')
let button = document.getElementsByTagName('button')[0]

// Ação do click
button.addEventListener('click', VerTabuada)

// função do click
function VerTabuada(){
    if(numero.value == 0){
        numero.style.border = '3px solid red'
        window.alert('Por favor digite um número')
    }else{
        let n = Number(numero.value)
        tab.innerHTML = ''
        button.style.background = 'blue'
        button.style.color = 'white'
        res.style.display = 'block'
        tab.style.padding = '15px'
        tab.style.width = '250px'
        tab.style.textAlign = 'center'
        tab.style.fontSize = '1.4em'
        tab.style.background = 'blue'
        tab.style.color = 'white'
        for(let c = 1;c <= 10;c ++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)
        }
    }
}

// Contador //

let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res2 = document.querySelector('.res2')
let button2 = document.querySelector('#button2')

// Ação do click
button2.addEventListener('click',contar)

// função do click
function contar(){
    if(inicio.value == 0 || fim.value == 0 || passo.value ==0){
        inicio.style.border = '3px solid red'
        fim.style.border = '3px solid red'
        passo.style.border = '3px solid red'
        window.alert('Favor preencher todos os campos')
    }else{
        res2.style.display = 'block'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            // Ordem crescente
            for(let c = i; c <= f; c += p){
                res2.innerHTML += ` ${c} \u{1f449}`
            }
        }else{
            // Ordem decrescente
            for(let c = i; c >= f; c -= p){
                res2.innerHTML += `${c} \u{1f449}`
            }
        }
        res2.innerHTML += ` \u{1f3c1}`
    }
}

// verificador de idade //

let date = new Date()
let anoAtual = date.getFullYear()
let nas = document.querySelector('#txtano')
let res3 = document.querySelector('.res3')
let sexo = document.getElementsByName('radsex')
let out = document.querySelector('#out')
let out2 = document.querySelector('#out2')

// Ação do click
let button3 = document.querySelector('#button3')
button3.addEventListener('click', verificar)

out.addEventListener('click', see)
function see(){
    if(out2.style.display == 'none'){
        out2.style.display = 'block'
    }else{
        out2.style.display = 'none'
    }

}


// função 

function verificar(){
    if(nas.value == 0 || nas.value > anoAtual){
        nas.style.border = '3px solid red'
        window.alert('favor digita o ano')
    }else{
        let Gênero = ''
        res3.style.display = 'block'
        let idade = anoAtual - Number(nas.value)
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            // Homem
            if(idade > 0 && idade < 12){
                Gênero = 'Menino'
                img.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                img.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                img.setAttribute('src','./imagens/idoso-m.png')
            }
            Gênero = 'Homem'
        }else if(sexo[1].checked){
            // Mulher
            Gênero = 'Mulher'
            if(idade > 0 && idade < 12){
                Gênero = 'Menina'
                img.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50 ){
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        }else{
            Gênero = out.value
        }
        res3.innerHTML = `Detectamos ${Gênero} que nasceu em ${nas.value} e em ${anoAtual} completará ou já completou ${idade} anos`
        res3.appendChild(img)
    }
}