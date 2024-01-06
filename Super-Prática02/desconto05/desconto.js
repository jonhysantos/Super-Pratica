let txtp = document.querySelector('#txtp')
let txtd = document.querySelector('#txtd')
let res = document.querySelector('#res')
let button = document.querySelector('.button')

// Ação do botão
button.addEventListener('click',verDesconto)

// Função da ação
function verDesconto(){
    if(txtp.value.length == 0){
        window.alert('Digite o preço do produto para ver o desconto.')
    }else if(txtd.value.length ==0){
        window.alert('Digite a porcentagem de desconto (%) para ver o desconto.')
    }else{
        // Convertendo para números
        let p = Number(txtp.value)
        let d = Number(txtd.value)

        // Adicionando o desconto
        let desconto = (d / 100) * p

        // Preço final com o desconto
        let preçoFinal = p - desconto

        // Exibe o resultado na tela

        res.innerHTML = `<p>Preço do produto: ${p.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
        res.innerHTML += `<p>desconto ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} </p>`
        res.innerHTML += `<p>Preço final ${preçoFinal.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} </p>`
        let off = document.createElement('p')
        off.innerHTML = `${d} % off`
        off.style.background += 'white'
        off.style.fontSize += '1.6em'
        off.style.color += 'black'
        res.appendChild(off)

    }
    txtp.value = ''
    txtd.value = ''
    txtp.focus()
}