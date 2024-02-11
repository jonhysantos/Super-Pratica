import { calcularDiasRestantesParaAniversario,calcularIdade } from "./Funções09.js";

// Solicitamos ao usuário a data de nascimento no formato dayjs (AAAA-MM-DD)
const dataNascimento = prompt('Digite sua data de nascimento (AAAA-MM-DD')

// Execute as funções.
const idade = calcularIdade(dataNascimento)
const diaRestantes = calcularDiasRestantesParaAniversario(dataNascimento)

// Exibe o resultado.
alert(`Você tem ${idade} anos e faltam ${diaRestantes} dias para seu aniversário.`)
