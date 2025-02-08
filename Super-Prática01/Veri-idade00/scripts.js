const date = new Date()
const dateActual = date.getFullYear()
const yearBorn = document.querySelector('.txt-ano');
const sex = document.getElementsByName('sex-choice');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

function calcAge(){
    if(yearBorn.value.length == 0){
        alert('Ano de nascimento inválido')
    }else{
        let genero = ''
        const age =  dateActual - Number(yearBorn.value) 
        const foto = document.createElement('img');
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
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${yearBorn.value} e em ${dateActual} completará ou já compltetou ${age} anos</p>`
        res.appendChild(foto)
    }
    
}

btn.addEventListener('click',calcAge)