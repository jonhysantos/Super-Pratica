const titulo = document.querySelector('h1')

titulo.addEventListener('click',function() {
    titulo.id = 'titulo-principal'
    titulo.classList.toggle("bg-blue")
})