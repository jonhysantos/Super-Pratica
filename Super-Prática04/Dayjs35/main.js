import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { calcularDiasRestantes, calcularIdade } from './funcoes35.js'

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
// Solicita a data ao usuário
const dataNascimento = prompt('Digite a data de nascimento no formato (AAAA-MM-DD):')

// chama a função que foi criada separada e calcula a idade.
const idade = calcularIdade(dataNascimento)

// chama a função externa que calcula os dias restantes.
const diasRestantes = calcularDiasRestantes(dataNascimento)

// Exibe o resultado na tela
alert(`Você tem ${idade} anos e restam ${diasRestantes} dias para o seu aniversário.`)

setupCounter(document.querySelector('#counter'))
