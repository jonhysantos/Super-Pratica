function generateCode(){
    const random = Math.floor(Math.random() * 999999) + 1
    const randomPadded = random.toString(6,'0');
    const element = document.getElementById('confirmation-code')
    element.textContent = randomPadded
}

setInterval(generateCode,10 * 1000);