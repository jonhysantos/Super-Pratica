let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')

red.style.background = 'red'

red.addEventListener('click',mudarRed)
yellow.addEventListener('click',mudarYellow)
green.addEventListener('click',mudarGreen)


function mudarRed(){
    red.style.background = 'red'
    yellow.style.background = 'white'
    green.style.background = 'white'
}

function mudarYellow(){
    red.style.background = 'white'
    yellow.style.background = 'yellow'
    green.style.background = 'white'
}

function mudarGreen(){
    red.style.background = 'whhite'
    yellow.style.background = 'white'
    green.style.background = '#00f400'
}