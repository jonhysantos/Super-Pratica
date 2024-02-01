
import {calcularDiasRestantesParaAniversario,calcularIdade} from './Funções.js'

// Solicite a data para o usuário.
const dataNascimento =  prompt('Digite sua data de nascimento (AAAA-MM-DD')

// Executa as funções.
const idade = calcularIdade(dataNascimento)
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento)

// Exibe o resultado.
alert(`Você tem ${idade} anos e faltam ${diasRestantes} Dias para o seu aniversário.`)

window.alert('jonhy')