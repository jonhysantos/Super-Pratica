import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nasimento no formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)
    // Calcula a diferença entre elas e retorna no formato 'year'
    const idade = hoje.diff(nascimento,'year')
    return idade

}

export function calcularDiasRestantesParaAniversario (dataNascimento){
    // Salva a data de hoje e a de nascimento no formato days
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)
    // Muda o ano da data de nascimento para o mesmo ano da ta de hoje.
    let proximoAniversario = nascimento.year(hoje.year())
    // Se o aniversário do ano atual já passou,aumenta 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    console.log(proximoAniversario,hoje)
    // Calcula a diferença e retorna ela na unidade 'day'
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}