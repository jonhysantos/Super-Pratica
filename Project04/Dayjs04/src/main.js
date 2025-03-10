
import { calcAge, calcDays } from '../functions.js'

const date = prompt('Digite a data de nascimento no formato (AAAA-MM-DD):')
const age = calcAge(date)
const daysLeft = calcDays(date)
alert(`Você tem ${age} anos e restam ${daysLeft} dias para o seu aniversário.`)


