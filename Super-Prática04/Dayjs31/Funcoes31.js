import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salvaa data de hoje e a de nascimento no formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença e retorna no formato year ou seja a idade.
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    // Salva a data de hoje e a de nascimento no fomrato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Muda o ano de nascimento para o mesmo ano de hoje.
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o ano do aniversário já passou acrescentar 1 ano na data
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }

    console.log(proximoAniversario,hoje)

    // Salva quantos dias falta e calcula a diferença em dias
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}