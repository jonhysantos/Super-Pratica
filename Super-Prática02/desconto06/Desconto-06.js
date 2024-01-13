let preçoAtual = document.querySelector('#txtp')
let porcDesc = document.querySelector('#txtd')
let res = document.querySelector('#res')
let button = document.querySelector('#button')

// Ação do botão.
button.addEventListener('click',verDesconto)

// Função da ação.
function verDesconto(){
    if(preçoAtual.value.length == 0 || porcDesc.value.length == 0){
        window.alert('Por favor preencha os campos necessário.')
    }else{
        let preço = Number(preçoAtual.value)
        let porc = Number(porcDesc.value)
        let desconto = (porc /100) * preço
        let novoPreço = preço - desconto
        res.style.display = 'block'
        res.innerHTML = `<p>Preço atual ${preço.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})}</p> `
        res.innerHTML += `<p>Desconto - ${desconto.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})} </p>`
        res.innerHTML += ` `
        res.innerHTML += `<p>Novo preço ${novoPreço.toLocaleString('pt-BR',{style: 'currency',currency :'BRL'})} </p>`
    }
    preçoAtual.value = ''
    porcDesc.value = ''
    preçoAtual.focus()
}