// Verificador de idade.
let date = new Date()
let anoAtual = date.getFullYear()
let nas = document.querySelector('#txtyear')
let sexo = document.getElementsByName('radsex')
let iden = document.querySelector('#iden')
let res = document.querySelector('.res')
let button = document.querySelector('.button')

// botão da ação.
button.addEventListener('click',verificar)

// Função do botão.
function verificar(){
    if(nas.value.length == 0 || nas.value > anoAtual || nas.value < 1920){
        window.alert('Ano de nascimento ou ano inserido')
    }else{
        let idade = anoAtual - Number(nas.value )
        let Gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if(sexo[0].checked){
            Gênero = 'Mulher'
            if(idade > 1 && idade < 12){
                Gênero = 'Menina'
                img.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        }else if(sexo[1].checked){
            Gênero = 'Homem'
            if(idade > 1 && idade < 12){
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
            Gênero = iden.value
        }
        res.style.display = 'block'
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${nas.value} e em ${anoAtual} completará ou já completou ${idade} anos.</p>`
        res.appendChild(img)
 
    }
}

// Super contador //

let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res2 = document.querySelector('.res2')
let button2 = document.querySelector('.button2')

// Botão da ação.
button2.addEventListener('click',contar)

// Função da ação.
function contar(){
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Número inválido ou campo em branco.')
    }else{
        res2.innerHTML = ''
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res2.style.display = 'block'
        if(i < f){
            // Ordem crescente.
            for(let c = i; c <= f; c += p){
                res2.innerHTML += ` ${c} \u{1f449}`
            }
        }else{
            // Ordem decrescente.
            for(let c = i; c >= f; c -= p){
            res2.innerHTML += ` ${c} \u{1f449}`   
            }
            
        }
        res2.innerHTML += ` \u{1f3c1}`
    }
    inicio.value = ''
    fim.value = ''
    passo.value = ''
    inicio.focus()
}

// Tabuada //

let num = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let res3 = document.querySelector('.res3')
let button3 = document.querySelector('.button3')

// Ação do botão.
button3.addEventListener('click',verTabuada)

// Função da ação.
function verTabuada(){
    if(num.value.length == 0){
        window.alert('Campo em branco.')
    }else{
        res3.style.display = 'block'
        tab.innerHTML = '' 
        let n = Number(num.value)
        for(let c = 1; c <= 10;c++ ){
          let item = document.createElement('option')
          item.text = `${n} x ${c} = ${n * c}`
          tab.style.padding = '10px'
          tab.style.fontSize = '1.4em'
          tab.appendChild(item)
        }
    }
    num.value = ''
    num.focus()
}
