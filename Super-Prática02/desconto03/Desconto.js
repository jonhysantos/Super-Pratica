let preço = document.querySelector('#txtp')
let porcentDesconto = document.querySelector('#txtd')
let res = document.querySelector('#res')

// Ação do botão
let button = document.querySelector('#button')
button.addEventListener('click',verDesconto)

//Função da ação
function verDesconto(){
    // validando 
    if(preço.value.length == 0 || porcentDesconto.value.length == 0){
        window.alert('Faltando dados')
    }else{
        // mostrar div de resultado
        res.style.display = 'block'
      // Transformando em número
    preço = Number(preço.value)
    porcentDesconto = Number(porcentDesconto.value)
    
    // Aplicando desconto
    let desconto = (porcentDesconto / 100) * preço

    // Preço final
    let preçoFinal = preço - desconto

    // Exibe na tela o resultado
    res.innerHTML = `<p>Preço atual ${preço.toLocaleString('pt-BR',{style: 'currency',currency:"BRL"})}</p>`
    res.innerHTML += `<p> Desconto -${desconto.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})}</p>`
    res.innerHTML += `<p> Preço com desconto ${preçoFinal.toLocaleString('pt-BR',{style: 'currency',currency:'BRL' })}`
    }
    
}

