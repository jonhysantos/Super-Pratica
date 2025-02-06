import dayjs from "dayjs";

export function calcAge(dateBirth){
    // Save the date actual and the birth year on format dayjs
    const today = dayjs()
    const birthYear = dayjs(dateBirth)
    // cal difference and return Age 
    const Age = today.diff(birthYear,'year')
    return Age
}

export function calcDays(dateBirth){
    // Save the date actual and the birth year on format dayjs
    const today = dayjs()
    const birthYear = dayjs(dateBirth)
    // Change the birth year to date today
    let nextAniversary = birthYear.year(today.year())
    // if aniversáry the year actual just past, add one year in date
    if(nextAniversary.isBefore(today)){
        nextAniversary = nextAniversary.add(1,'year')
    }
    console.log(nextAniversary,today)
    const daysToGo = nextAniversary.diff(today,'day')
    // calc the difference the day and return on format day
    return daysToGo

}