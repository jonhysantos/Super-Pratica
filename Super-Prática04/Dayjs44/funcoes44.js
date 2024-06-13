import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const hoje = dayjs();
    const nascimento = dayjs(dataNascimento);

    // Calcula a diferença e retorna no formato 'year'
    const idade = hoje.diff(nascimento,'year');
    return idade
}

export function calcularDiasRestantes(dataNascimento){
    const hoje = dayjs();
    const nascimento = dayjs(dataNascimento);

    // Transforma o ano de nascimento no ano atual
    let proximoAniversario = nascimento.year(hoje.year())

    // Se o aniversário do ano atual já passou, aumentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year')
    }

    // Calcula a diferença e retorna no formato 'day'
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}