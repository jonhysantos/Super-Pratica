import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { calcAge, CalcDaysToGo } from '../function.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
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
const dateBirthDay = prompt('Digite a data de nascimento no formato (AAAA-MM-DD):')
const age = calcAge(dateBirthDay)
const daysToGo = CalcDaysToGo(dateBirthDay)
alert(`Você tem ${age} anos e restam ${daysToGo} para o seu próximo aniversário`)


setupCounter(document.querySelector('#counter'))
