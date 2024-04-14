function tabs() {
    const wraperTab = document.querySelector('.tabheader__items'),
    itemTubs = document.querySelectorAll('.tabcontent'),
    tabBut = document.querySelectorAll('.tabheader__item');

    function tabsHiden() {
        itemTubs.forEach(i => {
            i.style.display = 'none'
        })

        tabBut.forEach(i => {
            i.classList.remove('tabheader__item_active')
        })
    }

    function tubsShowe(i = 0) {
        itemTubs[i].style.display = 'block'
        tabBut[i].classList.add('tabheader__item_active')
    }

    tabsHiden()
    tubsShowe()
    wraperTab.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('tabheader__item')){
            tabBut.forEach((item, i) => {
                if(e.target == item){
                    tabsHiden()
                    tubsShowe(i)
                }
            })
        }
    })
}

export default tabs