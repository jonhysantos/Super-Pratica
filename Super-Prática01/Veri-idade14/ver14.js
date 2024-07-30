let date = new Date()
let anoAtual = date.getFullYear()
const txtano = document.getElementById('txtano');
const btn = document.getElementById('btn');
const res = document.getElementById('res');
const radSex = document.getElementsByName('radSex');

btn.addEventListener('click',calcular);
function calcular(){
    if(txtano.value.length === 0){
        alert(`Ano inválido`)
    }else{
        let Gênero = ''
        let idade = anoAtual - Number(txtano.value);
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        if(radSex[0].checked){
            Gênero = 'Homem'
            if(idade < 12){
                Gênero = "Menino"
                foto.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulto-m.png')
            }else{
                foto.setAttribute('src','./imagens/idoso-m.png')
            }

        }else{
            Gênero = "Mulher"
            if(idade < 12){
                Gênero = "Menina"
                foto.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulta-f.png')
            }else{
                foto.setAttribute('src','./imagens/idosa-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${txtano.value} e que em ${anoAtual} completará ou já completou ${idade} anos`
        res.appendChild(foto)
    }
}