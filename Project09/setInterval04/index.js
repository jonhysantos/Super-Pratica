const codeGenerate = () => {
    const random = Math.floor(Math.random() * 999999) + 1
    const paddedNumber = random.toString().padStart(6,'0');
    const element = document.getElementById('confirmationC-code')
    element.textContent = paddedNumber
}

setInterval(codeGenerate,10 * 1000);