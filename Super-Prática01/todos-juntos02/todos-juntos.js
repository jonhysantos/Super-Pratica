// Verificador de idade //

let date = new Date()
let anoAtual = date.getFullYear()
let nasc = document.querySelector('#txtnasc')
let sexo = document.getElementsByName('radsex')
let out = document.querySelector('#out')
let res = document.querySelector('.res')
let button = document.querySelector('.button')

// Ação do botão.
button.addEventListener('click',verificar)

// Função da ação.
function verificar(){
    if(nasc.value.length == 0 || nasc.value > anoAtual){
        window.alert('Ano de nascimento maior que ano atual ou ano vazio')
    }else{
        let Gênero = ''
        let idade = anoAtual - Number(nasc.value)
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            Gênero = 'Mulher'
            if(idade > 0 && idade <12){
                Gênero = 'Menina'
                img.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50 ){
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        }else if(sexo[1].checked){
            Gênero = 'Homem'
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
        }else{
            Gênero = out.value
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${nasc.value} e em ${anoAtual} completará ou já completou ${idade} anos.</p>`
        res.appendChild(img)
    }
    nasc.value = ''
    nasc.focus()
}

// Projeto contador. //

let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res2 = document.querySelector('.res2')
let button2 = document.querySelector('.button2')

// Ação do botão.
button2.addEventListener('click',contar)

// Função da ação.
function contar(){
    if(inicio.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
        window.alert('Faltam dados, Por favor preencha todos os dados')
    }else{
        res2.innerHTML = ''
        res2.style.padding = '10px'
        res2.style.fontSize = '1.4em'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            // Ordem crescente.
            for(let c = i; c <= f; c += p){
                res2.innerHTML += `${c} \u{1f449}`
            }
        }else{
            // Ordem decrescente.
            for(let c = i; c >= f; c -= p){
                res2.innerHTML += `${c} \u{1f449}`
            }
        }
        res2.innerHTML += `\u{1f3c1}`
    }
    inicio.value = ''
    fim.value = ''
    passo.value = ''
    inicio.focus()
}

// Projeto tabuada. //

let num = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let res3 = document.querySelector('.res3')
let button3 = document.querySelector('.button3')

// Ação do botão.
button3.addEventListener('click',verTabuada)

// Função da ação.
function verTabuada(){
    if(num.value.length == 0){
        window.alert('Por favor, Digite um número para ver a sua tabuada.')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        tab.style.padding = '10px'
        tab.style.background = 'blue'
        tab.style.color = 'white'
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            res3.style.display = 'block'
        }
    }
    num.value = ''
    num.focus()
}
