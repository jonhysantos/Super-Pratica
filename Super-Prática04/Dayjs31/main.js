import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { calcularDiasRestantes, calcularIdade } from './Funcoes31.js'

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
// Solicita a data de nascimento
const dataNascimento = prompt('Digte sua data de nascimento no formato(AAAA-MM-DD)')

// Calcula a idade chamando a função importada
const idade = calcularIdade(dataNascimento)

// Calcula os dias restantes do proximo aniversário com a função importada
const diasRestantes = calcularDiasRestantes(dataNascimento)

// Mostra o resultado.
alert(`Você tem ${idade} anos e restam ${diasRestantes} dias`)

setupCounter(document.querySelector('#counter'))
