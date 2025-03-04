const date = new Date()
const year = date.getFullYear()
const yearBorn = document.querySelector('.year-born');
const sex = document.getElementsByName('sex')
const res = document.querySelector('.res');
const btn = document.querySelector('.btn');


function calcAge(){
    if(yearBorn.value > 2025 || yearBorn.value < 1930 || yearBorn.value > year || yearBorn.value.length == 0){
        alert('Ano de nascimento inválido')
    }else{
        let genero = ''
        const age = year - Number(yearBorn.value)
        const image = document.createElement('img');
        image.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(age < 12){
                genero = 'Menino'
                image.setAttribute('src','./imagens/criança-m.png')
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if(age < 12){
                genero = 'Menina'
                image.setAttribute('src','./imagens/menina-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${yearBorn.value} e em ${year} completará ou já completou ${age} anos</p>`
        res.appendChild(image)
    }
}

btn.addEventListener('click',calcAge)