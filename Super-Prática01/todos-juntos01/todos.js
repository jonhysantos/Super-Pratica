
// Projeto tabuada //

let numero = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let res = document.querySelector('.res')

// Ação do botão 
let button = document.querySelector('.button')
button.addEventListener('click',verTabuada)

// Função da ação 
function verTabuada(){
    if(numero.value.length == 0){
        window.alert('Por favor digite um número')
    }else{
        let n = Number(numero.value)
        tab.innerHTML = ''
        res.style.display = 'block'
        tab.style.padding = '15px'
        tab.style.fontSize = '1.4em'
        tab.style.textAlign = 'center'
        tab.style.background = 'blue'
        tab.style.color = 'white'
        tab.style.width = '250px'
        for(let c = 1; c <= 10; c ++){
            
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
        numero.value = ''
        numero.focus()
    }
}

// Projeto contador //

let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res2 = document.querySelector('.res2')

// Ação do botão 
let button2 = document.querySelector('.button2')
button2.addEventListener('click',contar)

// Função do botão 
function contar(){
    if(inicio.value.length = 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('Faltam dados, preencha os dados corretamente')
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res2.innerHTML = ''
        res2.style.fontSize = '1.4em'
        res2.style.display = 'block'
        if(i < f){
            // Ordem crescente
            for(let c = i; c <= f; c += p){
                res2.innerHTML += ` ${c} \u{1f449}`
            }
        }else{
            // Ordem decrescente
            for(let c = i; c >= f; c -= p){
                res2.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res2.innerHTML += `\u{1f3c1}`
        inicio.value = ''
        fim.value = ''
        passo.value = ''
        inicio.focus()
    }
}

// Projeto verificador de idade // 

let date = new Date()
let anoAtual = date.getFullYear()
let nasc = document.querySelector('#txtnas')
let sexo = document.getElementsByName('radsex')
let res3 = document.querySelector('.res3')
let choice = document.querySelector('#choice')

// Ação do botão 
let button3 = document.querySelector('.button3')
button3.addEventListener('click',verificar)

// Função da ação 
function verificar(){
    if(nasc.value.length == 0 || nasc.value > anoAtual || nasc.value <= 1900){
        window.alert('Digite o ano de nascimento válido')
    }else{
        let idade = anoAtual - Number(nasc.value)
        let Gênero = ''
        res3.style.display = 'block'
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        if(sexo[0].checked){
            Gênero = 'Mulher'
            
            if(idade > 0 && idade < 12){
                Gênero = 'Menina'
               foto.setAttribute('src','./imagens/menina-f.png') 
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulta-f.png')
            }else{
                foto.setAttribute('src','./imagens/idosa-f.png')
            }
        }else if(sexo[1].checked){
            Gênero = 'Homem'
            if(idade > 0 && idade < 12){
                Gênero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulto-m.png')
            }else{
                foto.setAttribute('src','./imagens/idoso-m.png')
            }
        }else{
            Gênero = choice.value
        }
        res3.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${nasc.value} e em ${anoAtual} completará ou já completou ${idade} anos</p>`
        res3.appendChild(foto)
        nasc.value = ''
        nasc.focus()
    }
}