let date = new Date()
let anoAtual = date.getFullYear()
let anoNascimento = document.querySelector('#txtn')
let sexo = document.getElementsByName('sex')
let outro = document.querySelector('#outro')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

btn.addEventListener('click',verificar)

function verificar(){
    if( anoNascimento.value > anoAtual || anoNascimento.value.length == 0 || anoNascimento.value < 1930){
        alert('Ano de nascimento inválido.')
    }else {
        let idade = anoAtual - Number(anoNascimento.value)
        let Gênero = ''
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        if(sexo[0].checked){
            Gênero = 'Mulher'
            if(idade < 12){
                Gênero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }
        }else if(sexo[1].checked){
            Gênero = 'Homem'
            foto.setAttribute('src','./imagens/criança-m.png')
        }else {
            Gênero = outro.value
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${anoNascimento.value} e em ${anoAtual} completará ou já completou ${idade} anos </p>`
        res.appendChild(foto)
    }
}