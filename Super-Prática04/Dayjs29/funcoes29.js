import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Guarda a data de hoje e a de nascimento no formato "dayjs"
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença entre elas e retorna no formato "year"
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    // Armazena a data de hoje e a de nascimento no formato "dayjs"
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Muda o ano da data de nascimento para o mesmo ano atual.
    let proximoAniversatio = nascimento.year(hoje.year())
    
    console.log(proximoAniversatio,hoje)

    // Se o aniversário já passou, acrescentar um ano na data.
    if(proximoAniversatio.isBefore(hoje)){
        proximoAniversatio = proximoAniversatio.add(1,'year')
    }

    // Calcula a diferença e retorna ela no formato "day"
    const diasRestantes = proximoAniversatio.diff(hoje,'day')
    return diasRestantes
}