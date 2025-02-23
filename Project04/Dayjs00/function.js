import dayjs from "dayjs";

export function calcAge(dateBirth){
    // save the date today and birth year om format dayjs
    const today = dayjs()
    const birthYear = dayjs(dateBirth)
    // calc diference and returns em "year"
    const age = today.diff(birthYear,'year')
    return age
}

export function CalcDaysToGo(dateBirth){
    const today = dayjs()
    const birthYear = dayjs(dateBirth)
    // change the year birth to date today
    let nextAniversary = birthYear.year(today.year())
    // if aniversary the year actual just past, add 1 year on date
    if(nextAniversary.isBefore(today)){
        nextAniversary = nextAniversary.add(1,'year')

    }
    console.log(nextAniversary,today)
    // calc the diference and return on format 'day'
    const daysToGo = nextAniversary.diff(today,'day')
    return daysToGo
}