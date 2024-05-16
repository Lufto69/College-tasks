export function modal() {
    const headerButton = document.querySelectorAll('.popup_engineer_btn'),
        popupCalcButton = document.querySelectorAll('.popup_calc_button'),
        mobileModleButtons = document.querySelectorAll('.phone_link'),
        popupCalcBtn = document.querySelectorAll('.popup_calc_btn'),
        popupCalcProfileButton = document.querySelectorAll('.popup_calc_profile_button'),
        endButton = document.querySelectorAll('.end_button'),

        popupEngineerModal = document.querySelector('.popup_engineer'),
        mobileModle = document.querySelector('.popup'),
        calcModal = document.querySelector('.popup_calc'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcEnd = document.querySelector('.popup_calc_end');

    setTimeout(() => mobileModle.style.display = 'block', 60000);
    
    function openModal(tegIventButton, modalOpen){
        tegIventButton.forEach(e => {
            e.addEventListener('click', () => {
                modalOpen.style.display = 'block'
            })
        })
    }
    
    function closeModal(tegModle) {
        tegModle.addEventListener('click', e => {
            const cross = tegModle.querySelector('.popup_close')
            if(e.target == tegModle || e.target == cross) {
                tegModle.style.display = 'none'
                indexImageWindow = 0
                showeImageWindow()
            }
        })
    }

    function checkValues(buttonChecked, selectorValueOne, selectorValueTwo, closeModal, openModal){
        buttonChecked.forEach(e =>{
            e.addEventListener('click', () => {
                const valueOne = document.querySelector(selectorValueOne),
                    valueTwo = document.querySelector(selectorValueTwo);
    
                if(valueOne.value !== '' && valueTwo.value !== ''){  //доделать
                    closeModal.style.display = 'none'
                    valueOne.value = ''
                    valueTwo.value = ''
                    valueOne.checked = false
                    valueTwo.checked = false
                    if(openModal){
                        openModal.style.display = 'block'
                    }
                } 
            })
        })
    }

    openModal(headerButton, popupEngineerModal)
    openModal(mobileModleButtons, mobileModle)
    openModal(popupCalcBtn, calcModal)

    checkValues(popupCalcButton, '#width', '#height', calcModal, popupCalcProfile)
    checkValues(popupCalcProfileButton, '.cold', '.warm', popupCalcProfile, popupCalcEnd)
    checkValues(endButton, '.endOne', '.endTwo', popupCalcEnd)

    closeModal(popupEngineerModal)
    closeModal(mobileModle)
    closeModal(calcModal)
    closeModal(popupCalcProfile)
    closeModal(popupCalcEnd)

    //tubs in modal calc
    const imageWindow = document.querySelectorAll('.balcon_icons_img');
    let indexImageWindow = 0;

    function showeImageWindow() {
        imageWindow.forEach(e => {
            e.classList.remove('do_image_more');
        })
        imageWindow[indexImageWindow].classList.add('do_image_more')
    }
    showeImageWindow()

    imageWindow.forEach((e, i) => {
        e.addEventListener('click', () => {
            indexImageWindow = i;
            showeImageWindow()
        })
    })

    //one chek inp
    const checkbox = document.querySelectorAll('.checkbox_weather')

    checkbox.forEach(e => {
        e.addEventListener('click', () => {
            checkbox.forEach(e => {
                e.checked = false
            })
            e.checked = true
        })
    })
}