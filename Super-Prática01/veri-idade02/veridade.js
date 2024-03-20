let date = new Date()
let dataAtual = date.getFullYear()
let anoNascimento = document.querySelector('#txtn')
let sexo = document.getElementsByName('radsex')
let res = document.querySelector('#res')
let outro = document.querySelector('#outro')
let btn = document.querySelector('#btn')
btn.addEventListener('click', verificar)

function verificar(){
    if(anoNascimento.value == 0){
        window.alert('Por favor, digite o ano de nascimento ex: (2014)')
    }else{
        let idade =  Number(dataAtual) - Number(anoNascimento.value)
        let Gênero = ""
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        if(sexo[0].checked ){
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
        }else if(sexo[1].checked){
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
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${anoNascimento.value} e em ${dataAtual} completará ou já completou ${idade}  anos </p>`
        res.appendChild(foto)
    }
}