
const GAME_OPTIONS = {
    candidata1:'Menina da sala',
    candidata2:'Sarcha mirelli',
    candidata3:'Se dedicar a Deus'
}

const playHuman = (humanChoice) => {
    playGame(humanChoice,playMachine())
}

const playMachine = () => {
    const options = [GAME_OPTIONS.candidata1,GAME_OPTIONS.candidata2,GAME_OPTIONS.candidata3]
    const random = Math.floor(Math.random() * 3)
    return options[random]
}

const playGame = (human,machine) => {
    console.log(human,machine)
}