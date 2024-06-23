import dayjs from "dayjs";

export function caluclarIdade(dataNascimento){

    // Salva a data de hoje e a de nascimento no formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença em anos e retorna a idade.
    const idade = hoje.diff(nascimento,'year')
    return idade

}

export function calcularDiasRestantes(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Transforma a data de hoje para a data atual
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o ano de nascimento já passou, acrescentar mais um ano na data
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    console.log(proximoAniversario,hoje)

    // calcula a diferença e retorna no formato day
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes

}

