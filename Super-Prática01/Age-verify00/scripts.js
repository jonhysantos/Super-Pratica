const date = new Date()
const yearActual = date.getFullYear()
const yearBorn = document.querySelector('.year-born');
const sex = document.getElementsByName('sex');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res')

function calcAge(){
    if(yearBorn.value < 1920 || yearBorn.value > yearActual || yearBorn.value == ''){
        alert('ano invalido')
    }else{
        const age = yearActual - Number(yearBorn.value)
        let genero = ''
        const foto = document.createElement('img');
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
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${yearBorn.value} e em ${yearActual} completará ou já completou ${age} anos</p>`
        res.appendChild(foto)
    }
}

btn.addEventListener('click',calcAge)