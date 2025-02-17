const date = new Date()
const yearActual = date.getFullYear()
const yearBorn = document.querySelector('.txt-year');
const sex = document.getElementsByName('sex-choice');
const btn = document.querySelector('.btn')
const res = document.querySelector('.res')

function calcAge(){
    if(yearBorn.value.length === 0 || yearActual < 1940 || yearBorn.value > yearActual){
        alert('Ano inválido')
    }else{
        const age = yearActual - Number(yearBorn.value);
        let genero = ''
        const foto = document.createElement('img')
        foto.setAttribute('id','foto');
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