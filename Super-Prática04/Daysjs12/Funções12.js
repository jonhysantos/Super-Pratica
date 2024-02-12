import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença entre eles e retorna no formato year.
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantesParaAniversario(dataNascimento){
    // Salva a data de hoje e a de nscimento no formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Muda o ano da data de nascimento para a mesma de hoje.
    let proximoAniversario = nascimento.year(hoje.year())
    console.log(proximoAniversario,hoje)

    // Se o aniversário do ano atual já passou, aumentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }

    // Calcula a diferença e retorna na unidade day.
    let diaRestantes = proximoAniversario.diff(hoje,'day')
    return diaRestantes
}