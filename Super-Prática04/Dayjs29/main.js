import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { calcularDiasRestantes, calcularIdade } from './funcoes29.js'

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
// Solicita ao usuário sua data de nascimento no formato (AAAA-MM-DD)
const dataNascimento = prompt('Digite sua data de nascimento (AAAA-MM-DD)')

// Calcula a idade 
const idade = calcularIdade(dataNascimento)

// Calcula os dias restantes
const diasRestantes = calcularDiasRestantes(dataNascimento)

// Exibe o resultado
alert(`Você tem ${idade} anos e restam ${diasRestantes} dias para seu aniversário.`)


setupCounter(document.querySelector('#counter'))
