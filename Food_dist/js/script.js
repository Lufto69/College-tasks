window.addEventListener('DOMContentLoaded', () => {
    tabs()
    calcTime()
    modalWindow()
    cards()

    function tabs(){
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

    function calcTime() {
        const dadline = '2024-03-31';

        function getTimeShowe(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
        }

        function getZero(num) {
            if(num >= 0 && num < 10){
                return `0${num}`
            } else {
                return num
            }
        }

        function setClok(selector, endTime) {
            const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock()

            function updateClock() {
                const t = getTimeShowe(endTime);

                days.innerHTML = getZero(t.days)
                hours.innerHTML = getZero(t.hours)
                minutes.innerHTML = getZero(t.minutes)
                seconds.innerHTML = getZero(t.seconds)

                if(t.total <= 0){
                    clearInterval(timeInterval)
                    days.innerHTML = '00'
                hours.innerHTML = '00'
                minutes.innerHTML = '00'
                seconds.innerHTML = '00'
                }
            }
        }

        setClok('.timer', dadline)
    }

    function modalWindow(){
        const buttonsOpen = document.querySelectorAll('[data-modal]'),
        buttonClose = document.querySelector('[data-close]'),
        modalWindow = document.querySelector('.modal'),
        timeOpen = setTimeout(open, 10000);

        function close() {
            modalWindow.classList.remove('show')
            modalWindow.classList.add('hide')
            document.body.style.overflow = ''
        }

        function open() {
            modalWindow.classList.add('show')
            modalWindow.classList.remove('hide')
            document.body.style.overflow = 'hidden'
            clearInterval(timeOpen)
        }

        function openAutomatic(){
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
                open()
                removeEventListener('scroll', openAutomatic)
                clearInterval(timeOpen)
            }
        }

        buttonsOpen.forEach(item => {
            item.addEventListener('click', open)
        })

        buttonClose.addEventListener('click', close)
        modalWindow.addEventListener('click', (e) => {
            if(e.target === modalWindow) {
                close()
            }
        })

        document.addEventListener('keydown', (e) => {
            if(e.keyCode === 27) {
                close()
            }
        })

        window.addEventListener('scroll', openAutomatic)
    }

    function cards() {
        class Card {
            constructor(src, subTitle, descr, valut, locate) {
                this.src = src
                this.subTitle = subTitle
                this.descr = descr
                this.valut = valut
                this.total = this.valut * 27
                this.locate = locate
            }

            create() {       
                let i = document.createElement('div');

                i.innerHTML = `
                <div class="menu__item">
                    <img src="img/tabs/${this.src}" alt="vegy">
                    <h3 class="menu__item-subtitle">${this.subTitle}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.total}</span> грн/месяц</div>
                    </div>
                </div> `
                
                this.locate.append(i)
            }
        }
        const wrapper = document.querySelector('.wrap'); 
        new Card(
            'vegy.jpg', 
            'Меню "Фитнес"', 
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
            229, wrapper).create();
        new Card(
            'elite.jpg', 
            'Меню “Премиум”', 
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
            550, wrapper).create();
        new Card(
            'post.jpg', 
            'Меню "Постное"', 
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
            430, wrapper).create();
    }
});