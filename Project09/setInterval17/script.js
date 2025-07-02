function generateCode(){
    const random = Math.floor(Math.random() * 999999) + 1
    const padded = random.toString().padStart(6,'0')
    const confirmation = document.getElementById('confirmation-code')
    confirmation.textContent = padded

}

setInterval(generateCode,10 * 1000)