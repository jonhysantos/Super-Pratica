import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento no fomrato dayjs.
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença e retorna em anos (year)

    const idade = hoje.diff(nascimento,"year")
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // muda o ano de nascimento para a data de hoje.
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o aniversario do ano atual já passou, acrescentar 1 ano na data
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    console.log(proximoAniversario,hoje)

    // Calcula a diferença e retorna no formato day
    const diasRestantes = proximoAniversario.diff(hoje,"day")
    return diasRestantes

}