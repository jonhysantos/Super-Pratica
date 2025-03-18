const date = new Date();
const dateToday = date.getFullYear()
const yearBorn = document.querySelector('.year-born');
const sex = document.getElementsByName('sex');
const res = document.querySelector('.res');
const btn = document.querySelector('.btn')


function calcAge(){
    if(yearBorn.value.length === 0 || yearBorn.value > dateToday || yearBorn.value < 1930){
        alert('Ano de nascimento invalido')
    }else{
        let age = dateToday - Number(yearBorn.value);
        let genero = ''
        const image = document.createElement('img');
        image.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(age < 12){
                image.setAttribute('src','./imagens/criança-m.png')
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if(age < 12){
                image.setAttribute('src','./imagens/menina-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${yearBorn.value} e em ${dateToday} completará ou já completou ${age} anos</p>`
        res.appendChild(image)
    }
}

btn.addEventListener('click',calcAge)