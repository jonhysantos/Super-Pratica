const btn = document.getElementById('addToCart');
btn.addEventListener('click',function(){
    const message = document.querySelector('.message');
    message.classList.remove('hidden')

    setTimeout(function () {
        message.classList.add('hidden')
    }, 2 * 1000)
})