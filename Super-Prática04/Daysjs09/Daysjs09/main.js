import { calcularDiaRestanteParaAniversario,calcularIdade } from "./Funções09.js";

// Solicite ao usuário a data de nascimento.

const dataNascimento = prompt('Digite sua data de nascimento (YYYY-MM-DD)')

// chamar as funções
const idade = calcularIdade(dataNascimento)
const diasRestantes = calcularDiaRestanteParaAniversario(dataNascimento)

// Exibe o resultado na tela.
window.alert(`Sua idade é ${idade} anos e restam ${diasRestantes} dias para seu aniversário.`)