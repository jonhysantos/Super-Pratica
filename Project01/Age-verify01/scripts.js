const date = new Date();
const yearActual = date.getFullYear()
const yearBorn = document.querySelector('.year-born');
const sex = document.getElementsByName('sex');
const res = document.querySelector('.res')
const btn = document.querySelector('.btn');


function calcAge(){
    if(yearBorn.value > 2025 || yearBorn.value < 1930 || yearBorn.value > yearActual || yearBorn.value.length == 0){
        alert(`Ano de nascimento inválido`)
    }else{
        const age = yearActual - Number(yearBorn.value)
        let genero = ''
        const foto = document.createElement('img');
        foto.setAttribute('id','foto');
        if(sex[0].checked){
            genero = 'Homem'
            if(age < 12){
                genero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }

        }else if(sex[1].checked){
            genero = 'Nuler'
            if(age < 12){
                genero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }
        }

        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${yearBorn.value} e em ${yearActual} completará ou já completou ${age} anos</p>`
        res.appendChild(foto)
    }
}

btn.addEventListener('click',calcAge)
