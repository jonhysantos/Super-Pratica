import dayjs, { dayjsayjs } from "dayjs";

export function calcAge(dateBorn){
    const today = dayjs()
    const born = dayjs(dateBorn)

    const age = born.diff(today,'year')
    return age
}

export function calcDay(dateBorn){
    const today = dayjs()
    const born = dayjs(dateBorn)

    let nextAniversary = born.year(today.year())

    if(nextAniversary.isBefore(today)){
        nextAniversary = nextAniversary.add(1,'year');
    }

    console.log(nextAniversary,today)

    const daysLeft = nextAniversary.diff(today,'day')
    return daysLeft
}