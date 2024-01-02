let preço = document.querySelector('#txtp')
let porcentagemDesconto = document.querySelector('#txtd')
let res = document.querySelector('#res')

// Ação do botão 
let button = document.querySelector('#button')
button.addEventListener('click',verDesconto)

// Função do clique do botão
function verDesconto(){
    res.style.display = 'block'
    
    if(preço.value.length == 0){
        res.innerHTML = '<p>Por favor digite o preço do produto</p>'
    }else if(porcentagemDesconto.value.length == 0){
        res.innerHTML =  '<p>Por favor digite a porcentagem do desconto (%)'
    }else{
        // Convertendo para número
        preçop = Number(preço.value)
        descontod = Number(porcentagemDesconto.value)

        // Aoplicando o desconto
        desconto = (descontod / 100) * preçop

        // Preço final
        let preçoFinal = preçop - desconto

        // Mostrando ao usuário
        
        res.innerHTML = `<p>Preço atual ${preçop.toLocaleString('pt-BR',{style:'currency',currency: 'BRl'})} </p>`
        res.innerHTML += `<p>Desconto - ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p> `
        res.innerHTML += `<p>Preço final ${preçoFinal.toLocaleString ('pt-BR',{style:'currency',currency:'BRL'})} </p>`
        let p = document.createElement('p')
        p.setAttribute('class','outdoor')
        p.innerHTML += `${porcentagemDesconto.value} 
        % Off`
        res.appendChild(p)
    }
    preço.value = ''
    porcentagemDesconto.value = ''
    preço.focus()
}