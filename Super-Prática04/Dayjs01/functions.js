import dayjs from "dayjs";

export function calcAge(dateBorn){
    // Salva a data de hoje e a de nascimento no formato dayjs
    const today = dayjs()
    const born = dayjs(dateBorn)

    // Calcula a diferença em anos e retorn a idade
    const age = today.diff(born,'year');
    return age

}

export function calcDays(dateBorn){
    const today = dayjs()
    const born = dayjs(dateBorn)
    
    // Altera a data de nascimento para a data de hoje
    let nextAniversary = born.year(today.year())
    // se o aniversario do ano atual ja passou acrescentar um ano na data
    if(nextAniversary.isBefore(today)){
        nextAniversary = nextAniversary.add(1,'year')
    }

    const dayToLeft = nextAniversary.diff(today,'day')
    return dayToLeft
}