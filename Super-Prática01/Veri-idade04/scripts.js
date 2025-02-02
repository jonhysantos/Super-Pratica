const date = new Date()
const actualYear = date.getFullYear()
console.log(actualYear)
const birthYear = document.querySelector('.txt-ano');
const sex = document.getElementsByName('sex-choice');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res')

const calc = () => {
    if(birthYear.value.length == 0 ){
        alert('Digite o ano de nascimento');
    }else{
        const yearsOld = actualYear - Number(birthYear.value);
        let genero = ''
        let foto = document.createElement('img');
        foto.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'homen'
            if(yearsOld < 12){
                genero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }
        }else if(sex[1].checked){
            genero = 'mulher'
            if(yearsOld < 12){
                genero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} que nasceu em ${birthYear.value} e em ${actualYear} completará ou já completou ${yearsOld} anos</p>`
        res.appendChild(foto)
    }
}

btn.addEventListener('click',calc)