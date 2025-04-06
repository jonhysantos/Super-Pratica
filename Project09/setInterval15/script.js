function generateCode(){
    const random = Math.floor(Math.random() * 999999) + 1
    const padded = random.toString().padStart(6,'0')
    const code = document.querySelector('#confirmation-code');
    code.textContent = padded
}

setInterval(generateCode, 10 * 1000)