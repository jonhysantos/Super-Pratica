import { calcularDiasRestantesParaAniversario,calcularIdade } from "./Funções03.js";

// Ask the user for your birthday.
const dataNascimento = prompt('Digite sua data de nascimento:(AAAA-MM-DD)')

// Exec the functions
const idade = calcularIdade(dataNascimento)
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento)

// show results
alert(`Você tem ${idade} anos e restam ${diasRestantes} dias para o seu aniversário.`)


