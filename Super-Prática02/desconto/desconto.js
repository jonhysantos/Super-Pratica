let preço = document.querySelector('#txtp')
let porcentagem = document.querySelector('#txtd')
let res = document.querySelector('#res')

// Ação do botão
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', descontar)

// Função 
function descontar() {
    if (preço.value.length == 0) {
        preço.style.border = '3px solid red'
    } else if (porcentagem.value.length == 0) {
        preço.style.border = 'none'
        porcentagem.style.border = '3px solid red'
    } else {
        // Transformando em número
        let p = Number(preço.value)
        let d = Number(porcentagem.value)

        // Aplicando o desconto
        let desconto = (d / 100 ) * p

        // Novo preço com desconto
        let novoPreço = p - desconto
        
        // Exibe o resultado na tela
        res.innerHTML = `<p>O preço é R$ ${p}</p>
        <p>desconto  ${d}% </p>
        <p> Novo preço R$ ${novoPreço} </p>`
    }
    
}







// novoPreço