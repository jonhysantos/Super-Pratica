
import {calcularDiasRestantesParaAniversario,calcularIdade} from './Funcções02.js'

// Solicite a data para o aniversário.
const dataNascimento = prompt('Digite sua data de nascimento (AAAA-MM-DD')

// Executa as funções.
const idade = calcularIdade(dataNascimento)
const diasRestantes = calcularDiasRestantesParaAniversario(dataNascimento)

// Exibe o resultado.
alert(`Você tem ${idade} anos e faltam ${diasRestantes} dias para o seu aniversário.`)



