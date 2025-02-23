import dayjs from "dayjs";

export function calcAge(dateBorn){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const today = dayjs()
    const born = dayjs(dateBorn)

    // Calcula a diferença e retorn em anos (idade)
    const age = today.diff(born,'year')
    return age
}

export function calcDays(dateBorn){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const today = dayjs()
    const born = dayjs(dateBorn)

    // altera a data de nascimento para a data atual
    let nextAniversary = born.year(today.year())
    // Se o aniversario do ano atual já passou, adicionar 1 ano na data
    if(nextAniversary.isBefore(today)){
        nextAniversary = nextAniversary.add(1,'year')
    }
    // Calcula a diferença e retorna em dias
    const daysLeft = nextAniversary.diff(today,'day')
    return daysLeft
}