import { calcularDiasParaAniversario,calcularIdade } from "./Funções08.js";

// Solicite ao usuário a data de nascimento.
const dataNascimento = prompt('Digite sua data de nascimento (YYYY-MM-DD)')

// Faça as funcões

const idade = calcularIdade(dataNascimento)
const diaRestantes = calcularDiasParaAniversario(dataNascimento)

// exibe o resultado na tela.
alert(`Você tem ${idade} anos e restam ${diaRestantes} dias para seu aniversário.`)


