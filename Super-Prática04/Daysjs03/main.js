
import {calcularDiasRestantesParaAniversario, calcularIdade } from './Funções03.js'

// solicite a data para o aniversário,0
const dataNascimento = prompt('Digite sua data de nascimento (AAAA-MM-DD)')

// Executa as funções.
const idade = calcularIdade(dataNascimento)
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento)

// Exibe o resultado.
alert(`Você tem ${idade} anos e restam ${diasRestantes} dia para o seu aniversário.`)
