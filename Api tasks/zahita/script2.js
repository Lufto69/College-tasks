window.addEventListener('DOMContentLoaded', () => {
    let inputs = document.querySelectorAll('input'),
    but1 = document.querySelector('.reg_btn')

    inputs.forEach(e => {
        e.style.display = 'block'
    })

    but1.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.href = 'index.html'
    })

})