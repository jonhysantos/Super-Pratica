const date = new Date()
const actualYear = date.getFullYear()
const birthYear = document.querySelector('.txt-ano')
const sex = document.getElementsByName('sex-choice')
const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

const calculateAge = () => {
    if(birthYear.value.length == 0){
        alert('Digite o ano de nascimento')
    }else{
        const YearsOld = actualYear - Number(birthYear.value)
        let genero = ''
        let foto = document.createElement('img');
        foto.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(YearsOld < 12){
                genero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }else if(YearsOld < 21){
                foto.setAttribute('src','./imagens/jovem-m.png')
            }else if(YearsOld < 45){
                foto.setAttribute('src','./imagens/adulto-m.png')
            }else{
                foto.setAttribute('src','./imagens/idoso-m.png')
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if(YearsOld < 12){
                genero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }else if(YearsOld < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }else if(YearsOld < 45){
                foto.setAttribute('src','./imagens/adulta-f.png')
            }else{
                foto.setAttribute('src','./imagens/idosa-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${birthYear.value} e em ${actualYear} completará ou já completou ${YearsOld} anos</p>`
        res.appendChild(foto)
        birthYear.value = ''
        birthYear.focus()
    }
}

btn.addEventListener('click',calculateAge)
