import dayjs from "dayjs";

export function caluclarIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato 'Daujs'
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença e retorna no formato "year"
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function caluclarDiasRestantes(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Muda a data de nascimento para o ano atual.
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o aniversário do ano atual já passou,acrescentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    console.log(proximoAniversario,hoje)

    // Calcula a diferença e retorna no formato "day"
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}