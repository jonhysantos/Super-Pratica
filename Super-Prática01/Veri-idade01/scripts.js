const date = new Date()
const year = date.getFullYear()
const bornYear = document.querySelector('.txt-year');
const sex = document.getElementsByName('sex-choice');
const btn = document.querySelector('.btn')
const res = document.querySelector('.res');

function calcAge(){
    if(bornYear.value == 0 || bornYear.value > year || bornYear.value < 1930){
        alert('Ano invalido.')
    }else{
        let genero = ''
        let age = year - Number(bornYear.value)
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(age < 12){
                genero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }

        }else if(sex[1].checked){
            genero = 'Mulher'
            if(age < 12){
                genero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${bornYear.value} e em ${year} completará ou já completou ${age} anos</p>`
        res.appendChild(foto)
    }
}

btn.addEventListener('click',calcAge)