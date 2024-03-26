import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs
    let hoje = dayjs()
    let nascimento = dayjs(dataNascimento)

    // Calcula a diferença entre elas e retorna no formato "year"
    let idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    let hoje = dayjs()
    let nascimento = dayjs(dataNascimento)

    let proximoAniversario = nascimento.year(hoje.year())

    console.log(proximoAniversario,hoje)
    // Se o aniversario do ano atual já passou, acrescentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }

    //
    let diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}