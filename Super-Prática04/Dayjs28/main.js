import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { calcularDiasRestantes, calcularIdade } from './funcoes.js'

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

let dataNascimento = prompt('Digite sua data de nascimento (AAAA-MM-DD)')

let idade = calcularIdade(dataNascimento)
let diasRestantes = calcularDiasRestantes(dataNascimento)

alert(`Você tem ${idade} anos e restam ${diasRestantes} para o seu aniversário`)

setupCounter(document.querySelector('#counter'))
