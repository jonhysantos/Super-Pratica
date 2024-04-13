import dayjs from "dayjs";

export function calcularIdade (dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcula a diferença em anos ou seja a idade.
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Muda a data de nascimento para a mesma data de hoje
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o aniversário do ano já passou, aumentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    console.log(proximoAniversario,hoje)

    // Calcula a diferença entre elas e retorna no formato 'dayjs'
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}