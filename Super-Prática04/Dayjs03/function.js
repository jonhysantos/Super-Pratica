import dayjs from "dayjs";

export function calcAge(dateBorn){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const today = dayjs()
    const born = dayjs(dateBorn)

    // Calcula a diferença de hoje para o ano de nascimento e retorn a idade (em anos)
    const age = today.diff(born,'year')
    return age
}

export function calcDays(dateBorn){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const today = dayjs()
    const born = dayjs(dateBorn)

    // altera o ano de nascimento para o ano atual
    let nextAniversary = born.year(today.year())
    // Se o dia do aniversário ja passou, adicionar 1 ano na data
    if(nextAniversary.isBefore(today)){
        nextAniversary = nextAniversary.add(1,'year')
    }

    console.log(nextAniversary,today)

    // calcula a diferente e retorn em day
    const daysLeft = nextAniversary.diff(today,'day')
    return daysLeft
}