import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença e retorna no formato "year"
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Salva o ano de nascimento para o mesmo ano de hoje
    let proximoAniversario = nascimento.year(hoje.year())

    // Se a data do aniversário já passou, acrescentar 1 ano na data 
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,"year")
    }

    console.log(proximoAniversario,hoje)

    // Calcula a diferença e retorna no formato "day"
    const diasRestantes = proximoAniversario.diff(hoje,"day")
    return diasRestantes
}
