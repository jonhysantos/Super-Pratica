const showMessage = () => {
    const message = document.querySelector('.message');
    message.classList.remove('hidden')

    setTimeout(function() {
        message.classList.add('hidden')
    }, 2 * 1000)
}

const btnAdd = document.getElementById('addToCart')
btnAdd.addEventListener('click',showMessage)