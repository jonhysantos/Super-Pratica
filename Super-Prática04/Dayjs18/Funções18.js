import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)
    let proximoAniversário = nascimento.year(hoje.year())
    console.log(proximoAniversário,hoje)
    if(proximoAniversário.isBefore(hoje)){
        proximoAniversário = proximoAniversário.add(1,'year')
    }
    const diasRestantes = proximoAniversário.diff(hoje,'day')
    return diasRestantes
}