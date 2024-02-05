import dayjs from "dayjs"

export function calcularIdade(dataNascimento){
    // Save today in format dayjs
    const hoje = dayjs()

    // Save date on birthday
    const nascimento = dayjs(dataNascimento)

    // calculate the differences between them and returns year format
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantesParaAniversario(dataNascimento){
    // Save today in format dayjs
    const hoje = dayjs()

    // Save date on birtday
    const nascimento = dayjs(dataNascimento)

    //Change the birthday on date today 
    let proximoAniversario = nascimento.year(hoje.year())

    // if birthday of day is before then add 1 year ond the date.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    console.log(proximoAniversario,hoje)

    // Calculate the differences between and return day format.
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}