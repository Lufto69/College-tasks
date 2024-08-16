window.addEventListener('DOMContentLoaded', () => {
    let inp = document.querySelector('#parol'),
    inp2 = document.querySelector('#login')
    but1 = document.querySelector('.reg_btn'),
    btn2 = document.querySelector('.prodoljit')

    but1.addEventListener('click', (e) => {
        e.preventDefault()
        inp.style.display = 'block'
        but1.style.display = 'none'
        btn2.style.display = 'block'
    })
    btn2.addEventListener('click', (e) => {
        e.preventDefault()
        inp.value = ''
        inp2.value = ''
        window.location.href = 'hats.html'
    })
})