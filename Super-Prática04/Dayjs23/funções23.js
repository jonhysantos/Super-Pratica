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
    let proximoAniversario = nascimento.year(hoje.year())
    console.log(proximoAniversario,hoje)
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}
