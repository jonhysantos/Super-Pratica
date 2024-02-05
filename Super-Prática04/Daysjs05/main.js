import { calcularDiasRestantesParaAniversario,calcularIdade } from "./Funções05.js";

// Solicite a data de nascimento ao usuário.
const dataNascimento = prompt('Digite a data de nascimento(AAAA-MM-DD)')

// Execute as funções.
const idade = calcularIdade(dataNascimento)
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento)

// Exibe o resultado.
alert(`Você tem ${idade} anos e restam ${diasRestantes} dias para o seu aniversário.`)


