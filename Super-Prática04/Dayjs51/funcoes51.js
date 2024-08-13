import dayjs from "dayjs";

export function calcularIdade(dataNascimento){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const hoje = dayjs();
    const nascimento = dayjs(dataNascimento);

    // Calcula a diferença entre elas e retorna a idade
    const idade = hoje.diff(nascimento,'year');
    return idade
}

export function caluclarDiasRestantes(dataNascimento){
    const hoje = dayjs();
    const nascimento = dayjs(dataNascimento);

    // altera a data de nascimento para a data atual.
    let proximoAniversario = nascimento.year(hoje.year());

    // Se a data do aniversário atual já passou, acrescentar 1 ano na data.
    if(proximoAniversario.isBefore(hoje)){
        proximoAniversario = proximoAniversario.add(1,'year');
    }

    console.log(proximoAniversario,hoje);

    // Calcula a diferença e retorna em dias.
    const diasRestantes = proximoAniversario.diff(hoje,'day')
    return diasRestantes
}