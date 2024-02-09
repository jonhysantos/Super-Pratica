let date = new Date()
let anoAtual = date.getFullYear()
const nascimento = document.querySelector('#txtn')
let sexo = document.getElementsByName('radsex')
let out = document.querySelector('#txtout')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

// Ação do botão.
btn.addEventListener('click',verificar)

// Função da ação.
function verificar(){
    if(nascimento.value.length == 0 ){
        window.alert('Por favor, insira uma data válida.')
    }else{
        let idade = anoAtual -  Number(nascimento.value)
        let Gênero = ''
        let foto = document.createElement('img')
        foto.setAttribute('id','foto')
        if(sexo[0].checked){
            Gênero = 'Homem'
            if(idade > 0 && idade < 12){
                Gênero = 'Menino'
                foto.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50 ){
                foto.setAttribute('src','./imagens/adulto-m.png')
            }else{
                foto.setAttribute('src','./imagens/idoso-m.png')
            }
        }else if(sexo[1].checked){
            Gênero = 'Mulher'
            if(idade < 12){
                Gênero = 'Menina'
                foto.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                foto.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                foto.setAttribute('src','./imagens/adulta-f.png')
            }else{
                foto.setAttribute('src','./imagens/idosa-f.png')
            }
        }else{
            let out = out.value
        }

        res.innerHTML = `<p>Você nasceu em ${nascimento.value} e tem ${idade} anos e do Genero ${Gênero}</p>`
        res.appendChild(foto)
    }
}