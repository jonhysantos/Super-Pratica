function code(){
    const random = Math.floor(Math.random() * 999999) + 1
    const padded = random.toString().padStart(6,'0')
    const code = document.getElementById('confirmation-code')

    code.innerHTML = padded  
}

setInterval(code, 10 * 1000)