import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de nascimento e a de hoje no formato dayjs.
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença e retorna no formato year.
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function caclulardiasParaAniversario(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs.
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Muda o ano de nascimento para a mesma data de hoje.
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o aniversario do ano atual já passou, aumentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    console.log(proximoAniversario,hoje)

    // Calcula a diferença e retorna na unidade day.
    const diaRestantes = proximoAniversario.diff(hoje,'day')
    return diaRestantes
}