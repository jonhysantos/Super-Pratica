import dayjs from "./node_modules/.vite";

export function calcAge(dateBorn){
    // salva a data de hoje e a de nascimento no formato dayjs
    const today = dayjs()
    const born = dayjs(dateBorn)

    // calcula a diferença e retorna em anos (age)
    const age = today.diff(born,'year')
    return age
}

export function calcDays(dateBorn){
    // salva a data de hoje e a de nascimento no formato dayjs
    const today = dayjs()
    const born = dayjs(dateBorn)

    // altera a data de nascimento para a data atual
    let nextAniversary = born.year(today.year())
    // Se a data do aniversario atual ja passou, adicionar um ano na data
    if(nextAniversary.isBefore(today)){
        nextAniversary = nextAniversary.add(1,'year')
    }

    console.log(nextAniversary,today)

    // calcula a diferença e retorn em day
    const daysLeft = nextAniversary.diff(today,'day')
    return daysLeft
}