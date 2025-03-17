function timeMessage(){
    const message = document.querySelector('.message')
    message.classList.remove('hidden')

    setTimeout(function() {
        message.classList.add('hidden');
    }, 4 * 1000)
}

const btn = document.getElementById('addToCart');
btn.addEventListener('click',timeMessage)