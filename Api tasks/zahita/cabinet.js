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


const wp = document.querySelectorAll('.info_post'),
op = document.querySelectorAll('.open'),
cl = document.querySelectorAll('.preopen'),
info_text = document.querySelectorAll('.info_text')

cl.forEach((e) => {
    e.style.display = 'none'
})

op.forEach((e) => {
    e.addEventListener('click', function () {
        let el = this.parentElement.querySelector('.info_text'),
        op = this.parentElement.querySelector('.open'),
        close = this.parentElement.querySelector('.preopen');
        op.style.display = 'none'
        el.style.display = 'block'
        close.style.display = 'block'
    })
})

cl.forEach((e) => {
    e.addEventListener('click', function () {
        let el = this.parentElement.querySelector('.info_text'),
        op = this.parentElement.querySelector('.open'),
        close = this.parentElement.querySelector('.preopen');
        op.style.display = 'block'
        el.style.display = 'none'
        close.style.display = 'none'
    })
})