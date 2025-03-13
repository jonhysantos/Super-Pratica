function codeConfirmation(){
    const random = Math.floor(Math.random() * 999999) + 1
    const fillNumber = random.toString().padStart(6,'0');
    const element = document.getElementById('confirmationCode');
    element.textContent = fillNumber
}

setInterval(codeConfirmation,10 * 1000)