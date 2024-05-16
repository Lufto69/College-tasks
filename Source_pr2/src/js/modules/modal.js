export function modal() {
    const buttonDesign = document.querySelectorAll('.button-design'),
        buttonСonsultation = document.querySelectorAll('.button-consultation'),
        pulse = document.querySelectorAll('.pulse'),

        popupDesign = document.querySelector('.popup-design'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupGift = document.querySelector('.popup-gift');

        let currentClick = 0
    
    function openAndCloseModal(tegIventButton, modalOpen){
        tegIventButton.forEach(e => {
            e.addEventListener('click', () => {
                modalOpen.style.display = 'block'
                if(tegIventButton == pulse) pulse[0].style.display = 'none'
                currentClick++
            })
        })

        modalOpen.addEventListener('click', e => {
            const cross = modalOpen.querySelector('.popup-close')
            if(e.target == modalOpen || e.target == cross) {
                modalOpen.style.display = 'none'
                currentClick++
            }
        })

        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if((window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) && currentClick === 0) {
                popupGift.style.display = 'block'
                if(tegIventButton == pulse) pulse[0].style.display = 'none'
            }
        })

        setTimeout(() => {
            if(currentClick === 0) popupConsultation.style.display = 'block'
        }, 60000)
    }
    

    openAndCloseModal(buttonDesign, popupDesign)
    openAndCloseModal(buttonСonsultation, popupConsultation)
    openAndCloseModal(pulse, popupGift)
}