let preço = document.querySelector('#txtp')
let porcentagemD = document.querySelector('#txtd')
let btn = document.querySelector('#btn')
let res = document.querySelector('#res')

// Ação do botão.
btn.addEventListener('click', calcular)

// Função da ação.
function calcular(){
    if(preço.value.length == 0 || porcentagemD.value.length == 0){
        window.alert('Por favor digite um número válido.')
    }else{
        // Geramos o valor do value
        let p = Number(preço.value)
        let d = Number(porcentagemD.value)

        // calculamos o desconto.
        let desconto = (d / 100 ) * p

        // Aplicamos o desconto no preço.
        let novoPreço = p - desconto

        // Exibe o resultado.
        res.style.display = 'block'
        res.innerHTML = `<p>Preço ${p.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Desconto ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>Novo preço com desconto ${novoPreço.toLocaleString('pr-BR',{style:'currency',currency:'BRL'})}</p>`

    }
    preço.value = ''
    preço.focus()
}