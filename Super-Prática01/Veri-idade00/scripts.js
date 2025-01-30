const date = new Date()
const yearActual = date.getFullYear()
const birthYear = document.querySelector('.txt-ano')
const sex = document.getElementsByName('sex-choice')
let res = document.querySelector('.res')
const btn = document.querySelector('.btn')


function howOld(){
    if(birthYear.value.length == 0){
        alert('Digite o ano de nascimento')
    }else{
        let genero = ''
        let idade = Number(yearActual) - Number(birthYear.value)
        let foto = document.createElement('img')
        if(sex[0].checked){
            genero = 'Homem'
            if(idade < 12){
                genero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 45){
                foto.setAttribute('src','./imagens/adulto-m.png')
            }else{
                foto.setAttribute('src','./imagens/idoso-m.png')
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if(idade < 12){
              genero = 'Menina'
              foto.setAttribute('src','./imagens/menina-f.png')  
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 45){
                foto.setAttribute('src','./imagens/adulta-f.png')
            }else{
                foto.setAttribute('src','./imagens/idosa-f.png')
            }
            
        }
        
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${birthYear.value} e em ${yearActual} completará ou já completou ${idade} anos.</p>`
        res.appendChild(foto)
    }

    
}

btn.addEventListener('click',howOld)

