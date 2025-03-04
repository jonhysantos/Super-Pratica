

// function to remove message from screen after 5 seconds
const  showMessage = () => {
    const message = document.querySelector('.message')
    message.classList.remove("hidden")

    setTimeout(function () {
        message.classList.add('hidden')

    },5 * 1000) // 5 miliseconds (5 seconds)

}

// add a event listening to bottom
const btnAdd = document.querySelector('#addToCart')
btnAdd.addEventListener('click',showMessage)