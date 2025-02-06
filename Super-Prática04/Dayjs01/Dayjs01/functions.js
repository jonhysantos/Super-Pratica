import dayjs from "dayjs";

export function calcAge(dateBirth){
    // save the date today and birth year om format dayjs
    const today = dayjs()
    const birthYear = dayjs(dateBirth)
    // calc diference and returns em "year"
    const age = today.diff(birthYear,'year')
    return age
}

export function calcDay(dateBirth){
    const today = dayjs()
    const birthYear = dayjs(dateBirth)

    let nextAniversary = birthYear.year(today.year())
    // if aniversáry just past, add one year on date
    if(nextAniversary.isBefore(today)){
        nextAniversary = nextAniversary.add(1,'year')
    }
    console.log(nextAniversary,today)

    const daysToGo = nextAniversary.diff(today,'day')
    return daysToGo
}