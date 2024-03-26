let date = new Date()
let anoAtual = date.getFullYear()
let nascimento = document.querySelector('#txtano')
let sexo = document.getElementsByName('sex')
let outro = document.querySelector('#outro')
let hide = document.querySelector('#hide')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

outro.addEventListener('click',show)

function show(){
    if(hide.style.display == 'none' || sexo[2].checked){
        hide.style.display = 'block'
    }else{
        hide.style.display = 'none'
    }
}

btn.addEventListener('click',verificar)

function verificar(){
    if(nascimento.value.length == 0 || nascimento.value > anoAtual || nascimento.value < 1920){
        nascimento.style.border = '2px solid blue'
        window.alert('Número inválido ou caixa em branco')
    }else {
        let Gênero = ''
        let idade = anoAtual - Number(nascimento.value)
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        res.style.display = 'block'
        if(sexo[0].checked){
            Gênero = 'Mulher'
            if(idade < 12 ){
                Gênero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }else if (idade < 50){
                foto.setAttribute('src','./imagens/adulta-f.png')
            }else{
                foto.setAttribute('src','./imagens/idosa-f.png')
            }
        }else if(sexo[1].checked) {
            Gênero = 'Homem'
            if(idade < 12){
                Gênero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }else if (idade < 21){
                foto.setAttribute('src','./imagens/jovem-m.png')
            }else if (idade < 50){
                foto.setAttribute('src','./imagens/adulto-m.png')
            }else{
                foto.setAttribute('src','./imagens/idoso-m.png')
            }
        }else{

            Gênero = iden.value
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${nascimento.value} e em ${anoAtual} fará ou já terá completado ${idade} anos</p>`
        res.appendChild(foto)
    }
}