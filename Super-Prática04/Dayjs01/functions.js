import dayjs from "dayjs";

export function calcAge(dateBorn){
    const today = dayjs()
    const birthYear = dayjs(dateBorn)

    const age = today.diff(birthYear,'year')
    return age
}

export function calcDays(dateBorn){
    const today = dayjs()
    const birthYear = dayjs(dateBorn)

    let nextAniversary = birthYear.year(today.year())
    if(nextAniversary.isBefore(today)){
        nextAniversary += add(1,'year')
    }
    console.log(nextAniversary,today)
    const daysToGo = nextAniversary.diff(today,'day')
    return daysToGo
}