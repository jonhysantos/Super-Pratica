let data = new Date()
let anoAtual = data.getFullYear()
const txtAno = document.getElementById('txtano');
const btn = document.getElementById('btn');
const radSex = document.getElementsByName('radsex');
const res = document.getElementById('res');

btn.addEventListener('click',function(){
    if(txtAno.value.length === 0 || txtAno.value > anoAtual || txtAno.value < 1940){
        alert('Por favor digite o ano de nascimento')
    }else{
        let Gênero = ''
        let idade = anoAtual -  Number(txtAno.value);
        const foto = document.createElement('img');
        foto.setAttribute('id','foto')
        if(radSex[0].checked){
            Gênero = 'Homem'
            if(idade < 12){
                Gênero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-m.png');
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulto-m.png')
            }else{
                foto.setAttribute('src','./imagens/idodo-m.png')
            }

        }else{
            Gênero = 'Mulher'
            if(idade < 12){
                foto.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${txtAno.value} e em ${anoAtual} completará ou já completou ${idade} anos</p>`
        res.appendChild(foto)
    }
})