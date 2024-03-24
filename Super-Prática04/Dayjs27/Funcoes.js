import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs
    let hoje = dayjs()
    let nascimento = dayjs(dataNascimento)

    // Calcular a diferença entre elas e retorna no formato 'year'
    let idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){

    // Salva a data de hoje e a de nascimento no formato "dayjs"
    let hoje = dayjs()
    let nascimento = dayjs(dataNascimento)

    // Muda o ano da data de nascimento para o mesmo ano da data de hoje.
    let proximoAniversario = nascimento.year(hoje.year())
    console.log(proximoAniversario,hoje)
    
    // Se o aniversário do ano atualjá passou, acrescentar 1 ano na data
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }

    // Calcula a diferença e retorna ela no formato "day"
    let diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}