import { calcularDiasRestantesParaAniversario,calcularIdade } from "./Funções07";

// Solicite ao usuário a data de nascimento.
const dataNascimento = prompt('Digite sua data de nascimento (AAAA-MM-DD)')


// Execute as funções.
const idade = calcularIdade(dataNascimento)
const diasRestantes =  calcularDiasRestantesParaAniversario(dataNascimento)

// Exibe o resultado.
window.alert(`Você tem ${idade} anos e restam ${diasRestantes} dias para o seu aniversário.`)

