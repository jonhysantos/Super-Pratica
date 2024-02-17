import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantesParaAniversario(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)
    let proximoAniversario = nascimento.year(hoje.year())
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    console.log(proximoAniversario,hoje)
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}