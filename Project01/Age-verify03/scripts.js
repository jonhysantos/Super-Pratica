const date = new Date();
const actualYear = date.getFullYear();
const bornYear = document.querySelector('.year-born');
const sex = document.getElementsByName('sex');
const res = document.querySelector('.res');
const btn = document.querySelector('.btn')

function calcAge(){
    if(bornYear.value.length === 0 || bornYear.value > actualYear || bornYear.value < 1930){
        alert('Ano de nascimento invalido')
    }else{
        const age = actualYear - Number(bornYear.value)
        let genero = ''
        const img = document.createElement('img');
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
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${bornYear.value} e em ${actualYear} completará ou já completou ${age} anos</p>`
        res.appendChild(img)
    }
}
btn.addEventListener('click',calcAge)
