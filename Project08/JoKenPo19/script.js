
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
let humanPoints = 0;
let machinePoints = 0;

const GAME_OPTIONS = {
    ROCK:'rock',
    PAPER:'paper',
    SCISSORS:'scissors'
}
const result = document.querySelector('.result');

const playHuman = (humanChoice) => {
    playGame(humanChoice,playMachine())
}

const playMachine = () => {
    const options = [GAME_OPTIONS.ROCK,GAME_OPTIONS.PAPER,GAME_OPTIONS.SCISSORS]
    const random = Math.floor(Math.random() * 3)
    return options[random]
}

const playGame = (human,machine) => {
    console.log(human,machine)
    if(human === machine){
        result.innerHTML = 'Deu empate'
    }else if(human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.PAPER
        || (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK
        || (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
        )
    ){
        humanPoints ++
        humanScore.innerHTML = humanPoints 
        result.innerHTML = 'Parabéns! Você venceu'
    }else{
        machinePoints ++
        machineScore.innerHTML = machinePoints
        result.innerHTML = 'Perdeu para a Alexa'
    }
}