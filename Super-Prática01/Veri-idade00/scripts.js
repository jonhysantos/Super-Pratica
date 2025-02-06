const date = new Date()
const dateActual = date.getFullYear()
const birthYear = document.querySelector('.txt-ano');
const sex = document.getElementsByName('sex-choice');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

function calcAge(){
    if(birthYear.value == 0 ){
        alert('Digite o ano de nascimento')
    }else{
        let genero = ''
        let age = dateActual - Number(birthYear.value)
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(age < 12){
                genero = 'Menino'
                img.setAttribute('src','./imagens/criança-m.png')
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if(age < 12){
                genero = 'Menina'
                img.setAttribute('src','./imagens/menina-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${birthYear.value} e em ${dateActual} completará ou já completou ${age}</p>`
        res.appendChild(img)
    }
}

btn.addEventListener('click',calcAge)