import dayjs from "dayjs";

export function caluclarIdade(dataNascimento){

    // Salva a data de hoje e a de nascimento no formato dayjs
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Calcular a diferença entre eles no formato 'year'
    const idade = hoje.diff(nascimento,'year')
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    const hoje = dayjs()
    const nascimento = dayjs(dataNascimento)

    // Muda a data de nascimento para a mesma data de hoje.
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o dia do aniversário do ano atual já passou, aumentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }
    
    // Calcula a diferença em dia e retorna os dias restantes
    const diasRestante = proximoAniversario.diff(hoje,'day')
    return diasRestante
}