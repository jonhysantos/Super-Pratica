import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs.
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença e retorna a diferença em anos ou seja a idade.
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Muda o ano de nascimento para o ano atual.
    let proximoAniversario = nascimento.year(hoje.year())

    // Se a data de nascimento já passou, acrescentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }

    console.log(proximoAniversario,hoje)

    // Calcula a diferença e retorna na unidade "Day"
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}