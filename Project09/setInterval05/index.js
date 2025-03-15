function generateNumber(){
    const random = Math.floor(Math.random() * 999999) + 1
    const numPadded = random.toString().padStart(6,'0');
    const confirmationCode = document.getElementById('confirmation-code')
    confirmationCode.textContent = numPadded
}

setInterval(generateNumber,10 * 1000)