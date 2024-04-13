let date = new Date()
let anoAtual = date.getFullYear()
let anoNascimento = document.querySelector('#txtano')
let sexo = document.getElementsByName('sex')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')
let hide = document.querySelector('.hide')
let out = document.querySelector('#out').addEventListener('click',clicou)
let identificador = document.querySelector('#identifica')

btn.addEventListener('click',verificar)


function clicou(){
    if(hide.style.display == 'none'){
      hide.style.display = 'block'
      
    }else{
        hide.style.display = 'none'
    }
    
}

function verificar(){
    if(anoNascimento.length == 0 || anoNascimento.value > anoAtual || anoNascimento.value < 1930 ){
        alert('Ano inválido, tente novamente.')
    }else{
        let Gênero = ''
        let idade = anoAtual - Number(anoNascimento.value)
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        if(sexo[0].checked){
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

        }else if(sexo[1].checked){
            Gênero = 'Homem'

        }else{
            Gênero = identificador.value
        }
        res.innerHTML = `<p>Identificamos ${Gênero} que nasceu em ${anoNascimento.value} e em ${anoAtual} completará ou ja tenha completado ${idade}</p>`
        res.appendChild(foto)
    }
}
