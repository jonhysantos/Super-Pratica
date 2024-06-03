let date = new Date()
let anoAtual = date.getFullYear()   
const txtn = document.getElementById('txtn');
const btn = document.getElementById('btn');
let radSex = document.getElementsByName('radSex')
const res = document.getElementById('res')


btn.addEventListener('click',function(){
    if(txtn.value.length === 0 || txtn.value < 1930 || txtn.value > anoAtual ){
        alert(`Ano de nascimento inválido.`)
    }else{
        let Gênero = ''
        let idade =   anoAtual - Number(txtn.value)
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')

        if(radSex[0].checked){
            Gênero = 'Homem'
            if(idade < 12){
                Gênero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 22){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }

        }else if(radSex[1].checked){
            Gênero = 'Mulher'
        }
        res.innerHTML = `<p>Você nasceu em ${txtn.value} e em ${anoAtual} Você completou ou irá completar ${idade} anos</p>`
        res.appendChild(foto)
    }
})