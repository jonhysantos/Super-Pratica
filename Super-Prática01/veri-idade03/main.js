let date = new Date()
let anoAtual = date.getFullYear()
const anoNascimento = document.querySelector('#txtano')
let sexo = document.getElementsByName('sex')
let outro = document.querySelector('#out')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',verificar)

function verificar(){
    if(anoNascimento.value.length == 0 || anoNascimento > anoAtual){
        window.alert('Por favor digite o ano de nascimento')
    }else{
        let Gênero = ''
        let idade = anoAtual - Number(anoNascimento.value)
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        if(sexo[0].checked){
            Gênero = 'Homem'
            if(idade < 12){
                Gênero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulto-m.png')
            }else{
                foto.setAttribute('src','./imagens/idoso-m.png')
            }

        }else if(sexo[1].checked){
            Gênero = 'Mulher'
            if(idade < 12){
                Gênero = 'menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulta-f.png')
            }else{
                foto.setAttribute('src','./imagens/idosa-f.png')
            }
        }else{
            Gênero = outro.value
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${anoNascimento.value} e em ${anoAtual} completará ou já completou ${idade} anos</p>`
        res.appendChild(foto)
    }
}