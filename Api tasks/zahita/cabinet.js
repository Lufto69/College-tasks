const nameUser = document.querySelector('.name'),
date = document.querySelector('.date'),
Fio = document.querySelector('#Fio'),
Inpdate = document.querySelector('#date'),
izmenit = document.querySelector('.izmenit'),

overlay = document.querySelector('.overlay'),
btn = document.querySelector('#go')

izmenit.addEventListener('click', () => {
    overlay.style.display = 'block'
})

btn.addEventListener('click', () => {
    if (Fio.value != '') {
        nameUser.innerHTML = Fio.value
    }
    if(Inpdate.value != '') {
        date.innerHTML = Inpdate.value
    }
    overlay.style.display = 'none'
})


const open =document.querySelector('.open'),
op = document.querySelectorAll('.open'),
preopen = document.querySelectorAll('.preopen'),
wp = document.querySelector('.info_post'),
info_text = document.querySelector('.info_text')


op.forEach(e => {
    e.addEventListener('click', () => {
        e.remove()
        wp.style.height = '100px'
    })
})
preopen.forEach(e => {
    e.addEventListener('click', (e) => {
        info_text.before(open)
        wp.style.height = '34px'
    })
})