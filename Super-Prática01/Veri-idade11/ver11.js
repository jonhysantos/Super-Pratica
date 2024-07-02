let date = new Date()
let anoAtual = date.getFullYear()
let anoNascimento = document.getElementById('txtano');
let radSex = document.getElementsByName('sex')
let btn = document.getElementById('btn')
let res = document.getElementById('res')

btn.addEventListener('click',calcular)

function calcular(){
    if(anoNascimento.value.length === 0 || anoNascimento.value > anoAtual || anoNascimento.value < 1930 ){
        alert(`Ano inválido,tente novamente`)
    }else{
        let idade =  anoAtual - Number(anoNascimento.value)
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        let Gênero = ''
        if(radSex[0].checked){
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

        }else if(radSex[1].checked){
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
        }else{
            Gênero = 'Prefiro não dizer'
        }
        res.innerHTML = `<p>Você é ${Gênero} e nasceu em ${anoNascimento.value} e em ${anoAtual} você completará ou já completou ${idade} anos</p>`
        res.appendChild(foto)
    }
    
}