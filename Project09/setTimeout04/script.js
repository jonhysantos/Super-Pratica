const showMessage = () => {
    const message = document.querySelector('.message');
    message.classList.remove('hidden');

    setTimeout(function() {
        message.classList.add('hidden')
    }, 5 * 1000)
}

const btn = document.querySelector('#addToCart');
btn.addEventListener('click',showMessage)