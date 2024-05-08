let date = new Date()
let anoAtual = date.getFullYear()
const anoNascimento = document.getElementById('txtano')
const sexo = document.getElementsByName('txtsex')
const out = document.querySelector('#txtout')
const button = document.querySelector('#btn')
let res = document.querySelector('#res')

button.addEventListener('click', function () {
    if (anoNascimento.value.length === 0 || anoNascimento.value > anoAtual) {
        alert('Ano de nascimento inválido.')
    } else {
        let idade = anoAtual - Number(anoNascimento.value)
        let Gênero = ''
        let foto = document.createElement('img')
        foto.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            Gênero = 'Mulher'
            if(idade < 12){
                Gênero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }
        } else if (sexo[0].checked) {
            Gênero = 'Homem'
        }else{
            Gênero = out.value
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${anoNascimento.value} e em ${anoAtual} completará ou já completou ${idade} anos.</p>`
        res.appendChild(foto)
        
    }
})