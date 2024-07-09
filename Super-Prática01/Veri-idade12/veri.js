let date = new Date()
let anoAtual = date.getFullYear();
let txtAno = document.getElementById('txtAno');
let radSex = document.getElementsByName('radsex');
let btn = document.getElementById('btn');
let res = document.getElementById('res');

btn.addEventListener('click',verificar)

function verificar(){
    if(txtAno.value.length === 0 || txtAno.value > anoAtual || txtAno.value < 1930 ){
        alert(`Ano de nascimento inválido.`)
    }else{
        let idade = anoAtual - Number(txtAno.value) 
        let foto = document.createElement('img');
        foto.setAttribute('id','foto')
        let Gênero = ''
        if(radSex[0].checked){
            Gênero = "homem"
            if(idade < 12){
                Gênero = "Menino"
                foto.setAttribute("src",'./imagens/criança-m.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulto-m.png')
            }

        }else if(radSex[1].checked){
            Gênero = "mulher"
            if(idade < 12){
                Gênero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }
        }else{
            Gênero = 'desconhecido'
        }
        res.innerHTML = `<p>Você é ${Gênero} nasceu em ${txtAno.value} e em ${anoAtual} completará ou já completou ${idade} anos.</p>`
        res.appendChild(foto)
    }
}