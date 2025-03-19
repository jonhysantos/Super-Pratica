const btn = document.getElementById('addToCart')

function timeOut(){
    const message = document.querySelector('.message');
    message.classList.remove('hidden');

    setTimeout(function(){
        message.classList.add('hidden');
    },3 * 1000)
}

btn.addEventListener('click',timeOut)