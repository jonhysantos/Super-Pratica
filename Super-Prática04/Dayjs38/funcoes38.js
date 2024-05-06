import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento para o formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença entre elas e depois retorna em anos ('year')
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Tras o ano de nascimento para o mesmo ano de hoje
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o aniversário do ano atual já passou, aumentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario.add(1,'year')
    }
    console.log(proximoAniversario,hoje)

    // Calcula a diferença e retorna na unidade "day"
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}