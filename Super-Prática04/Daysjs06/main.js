import { calcularDiasRestantesParaAniversario,calcularIdade } from "./Funções06.js"

// Solicite a data para o usuário.
const dataNascimento = prompt('Digite sua data de nascimento(AAAA-MM-DD)')

// Execute as funções.
const idade = calcularIdade(dataNascimento)
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento)

// Exibe o resultado.
alert(`Você tem ${idade} anos e restam ${diasRestantes} dias para seu aniversário.`)
