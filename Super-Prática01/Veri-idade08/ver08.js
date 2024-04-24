let date = new Date()
let anoAtual = date.getFullYear()
let anoNascimento = document.querySelector('#txtano')
let sex = document.getElementsByName('sex')
let txts = document.querySelector('#txts')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',verificar)

function verificar(){
    if(anoNascimento.value == 0 || anoNascimento.value > anoAtual || anoAtual < 1920){
        alert('Ano inválido')
    }else{
        let Gênero = ''
        let idade = anoAtual - Number(anoNascimento.value)
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        if(sex[0].checked){
            Gênero = 'Mulher'
            if(idade < 12){
                Gênero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulta-f.png')
            }else{
                foto.setAttribute('src','./imagens/idosa-f.png')
            }
        }else if(sex[1].checked){
            Gênero = "Homem"
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
            
        }else{
            Gênero = txts.value
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${anoNascimento.value} e em ${anoAtual} completará ou já completou ${idade} anos.</p>`
        res.appendChild(foto)
    }
}