const result = document.querySelector('.result');
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}
const playHuman = (humanChoice) => {
    playGame(humanChoice, playMachine())
}

const playMachine = () => {
    const options = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const random = Math.floor(Math.random() * 3)
    return options[random]
}

const playGame = (human, machine) => {
    console.log(human, machine)
    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS)
        || (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK)
        || (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        result.innerHTML = "Você ganhou"
    }else{
        result.innerHTML = "Você perdeu para a Alexa"
    }
}