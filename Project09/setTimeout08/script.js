function messageTime(){
    const message = document.querySelector('.message');
    message.classList.remove('hidden');

    setTimeout(function() {
        message.classList.add('hidden')
    },6 * 1000)
}

const btn = document.querySelector('#addToCart');
btn.addEventListener('click',messageTime)