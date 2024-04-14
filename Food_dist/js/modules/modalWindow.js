function close(modalSelector) {
    modalWindow = document.querySelector(modalSelector)
    modalWindow.classList.remove('show')
    modalWindow.classList.add('hide')
    document.body.style.overflow = ''
}

function open(modalSelector, openTimerId) {
    modalWindow = document.querySelector(modalSelector)    
    modalWindow.classList.add('show')
    modalWindow.classList.remove('hide')
    document.body.style.overflow = 'hidden'

    if(openTimerId){
        clearInterval(openTimerId)
    }
}

function modalWindow(trigerSelector, modalSelector, openTimerId) {
    const buttonsOpen = document.querySelectorAll(trigerSelector),
    modalWindow = document.querySelector(modalSelector);

    function openAutomatic(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            open(modalSelector, openTimerId)
            removeEventListener('scroll', openAutomatic)
            clearInterval(openTimerId)
        }
    }

    buttonsOpen.forEach(item => {
        item.addEventListener('click', () => open(modalSelector, openTimerId))
    })

    modalWindow.addEventListener('click', (e) => {
        if(e.target === modalWindow || e.target.getAttribute('data-close') == "") {
            close(modalSelector)
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 27) {
            close(modalSelector)
        }
    })

    window.addEventListener('scroll', openAutomatic)
}

export default modalWindow
export {open, close}