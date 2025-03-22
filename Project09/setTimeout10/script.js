function timeOut(){
    const message = document.querySelector('.message');
    message.classList.remove('hidden')

    setTimeout(function(){
        message.classList.add('hidden');

    }, 3 * 1000)
}

const btn = document.getElementById('addToCart');
btn.addEventListener('click',timeOut)