function intervalo(){
    const random = Math.floor(Math.random() * 999999) + 1
    const padded = random.toString().padStart(6,'0')
    const confirmationCode = document.getElementById('confirmation-code')
    confirmationCode.textContent = padded
}

setInterval(intervalo,10 * 1000);