function calc() {

    let sex = 'she', height, weight, age, ratio = 1.375;
    const result = document.querySelector('.calculating__result span')

    sex = localStorage.getItem('sex'),
    ratio = localStorage.getItem('ratio')

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '0000';
            return;
        } else {
            localStorage.setItem('sex', sex),
            localStorage.setItem('ratio', ratio)
        }
        if (sex === 'she') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    function addLocalStorag(selector, activeClass) {
        const element = document.querySelectorAll(selector)

        element.forEach(e => {
            e.classList.remove(activeClass);

            if(e.getAttribute('data-radio') == localStorage.getItem('ratio')) {
                e.classList.add(activeClass);
            }

            if(e.getAttribute('id') == localStorage.getItem('sex')) {
                e.classList.add(activeClass);
            }
        })
    }

    addLocalStorag('.calculating__choose_big div', 'calculating__choose-item_active')
    addLocalStorag('#gender div', 'calculating__choose-item_active')

    function buttonActiveAndInput(perentSelector, activeClass) {
        const button = document.querySelectorAll(`${perentSelector} div`)

        button.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if(e.target.getAttribute('data-radio')) {
                    ratio = e.target.getAttribute('data-radio')
                } else {
                    sex = e.target.getAttribute('id');
                }

                button.forEach((e) => {
                    e.classList.remove(activeClass)
                })

                e.target.classList.add(activeClass);


                calcTotal()
            })
        })
    }

    buttonActiveAndInput('#gender', 'calculating__choose-item_active');
    buttonActiveAndInput('.calculating__choose_big', 'calculating__choose-item_active');

    function calcValue(selector) {
        const inp = document.querySelector(selector)

        inp.addEventListener('input', () => {
            if(inp.value.match(/\D/)) {
                inp.style.border = "1px solid red";
            } else {
                inp.style.border = "none";
            }

            switch(inp.getAttribute('id')){
                case 'height':
                    height = +inp.value
                    break
                case 'weight':
                    weight = +inp.value
                    break
                case 'age':
                    age = +inp.value
                    break
            }

            calcTotal()
        })
    }

    calcValue('#height')
    calcValue('#weight')
    calcValue('#age')
}

export default calc