import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
import { calcularDiasRestantesParaAniversario,calcularIdade } from './Funções17.js'

  const dataNascimento = prompt('Digite sua data de aniversário(AAAA-MM-DD)')
    if(isNaN(dataNascimento )){
      window.alert('Por favor somente números')
    }else{
      const idade = calcularIdade(dataNascimento)
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento)

window.alert(`Você tem ${idade} anos e restam ${diasRestantes} dias para seu aniversário`)
    }



setupCounter(document.querySelector('#counter'))
