/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/calcTime.js":
/*!********************************!*\
  !*** ./js/modules/calcTime.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calcTime() {

    const dadline = '2024-04-01';

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcTime);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
                <img src="${this.src}" alt="vegy">
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
    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => res.forEach(({img, title, descr, price}) => {
        new Card(img, title, descr, price, wrapper).create()
    }))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/inputData.js":
/*!*********************************!*\
  !*** ./js/modules/inputData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalWindow */ "./js/modules/modalWindow.js");


function inputData(openTimerId) {
    const forms = document.querySelectorAll('form'),
    message = {
        loading: 'spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach((e) => {
        processing(e)
    })

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })

        return await res.json()
    }

    function processing(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            let statusMessage = document.createElement('img')
            statusMessage.classList = ('imgForm')
            statusMessage.src = message.loading
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form)
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then((data) => {
                console.log(data)
                statusMessage.remove()
                newModal(message.success)
            })
            .catch(() => {
                newModal(message.failure)
            })
            .finally(() => {
                form.reset()
            })
        })
    }

    function newModal(masang) {
        const modalDialog = document.querySelector('.modal__dialog')
        modalDialog.classList.add('hide')
        ;(0,_modalWindow__WEBPACK_IMPORTED_MODULE_0__.open)('.modal', openTimerId)

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${masang}</div>
            </div>
        `

        document.querySelector('.modal').append(thanksModal)
        setTimeout(() => {
            thanksModal.remove();
            (0,_modalWindow__WEBPACK_IMPORTED_MODULE_0__.close)('.modal')
            modalDialog.classList.remove('hide')
        }, 3000)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputData);

/***/ }),

/***/ "./js/modules/modalWindow.js":
/*!***********************************!*\
  !*** ./js/modules/modalWindow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   close: () => (/* binding */ close),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   open: () => (/* binding */ open)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
    const left = document.querySelector('#left'),
    right = document.querySelector('#right'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    sliderWrapper = document.querySelector('.offer__slider-wrapper'),
    cartSlide = document.querySelectorAll('.offer__slide');
    let slidIndex = 0,
    curSlid = 0;

    showSlid()
    activityPoints()
    showDot()

    if (curSlid <= 10){
        total.innerHTML = `0${curSlid + 1}`
    } else {
        total.innerHTML = curSlid + 1
    }

    left.addEventListener('click', () => {
        if(slidIndex > 0) {
            slidIndex--
        } else {
            slidIndex = curSlid
        }
        showDot()
    })

    right.addEventListener('click', () => {
        if(slidIndex < curSlid) {
            slidIndex++
        } else {
            slidIndex = 0
        }
        showDot()
    })

    function activityPoints() {
        const pintsWrap = document.createElement('div')
        pintsWrap.classList.add('carousel-indicators')
        sliderWrapper.append(pintsWrap)

        for(let i = 0; i <= curSlid; i++) {
            const point = document.createElement('div')
            point.classList.add('dot')
            point.setAttribute('data-slide-to', i);
            pintsWrap.append(point)

        }

        const points = document.querySelectorAll('.dot')
        points.forEach(point => {
            point.addEventListener('click', (e) => {
                points.forEach(p => {
                    p.style.opacity = 0.4
                })
                slidIndex = +e.target.getAttribute('data-slide-to')
                point.style.opacity = 1
                showSlid()     
            })
        })
        
    }

    function showSlid(){        
        cartSlide.forEach((item, index)=> {
            curSlid = index
            item.style.display = 'none'

            if(index === slidIndex){
                item.style.display = 'block'
            }
        })

        if (slidIndex < 9){
            current.innerHTML = `0${slidIndex + 1}`
        } else {
            current.innerHTML = slidIndex + 1
        }
    }

    function showDot(){
        const points = document.querySelectorAll('.dot')
        points.forEach((dot, i) => {
            dot.style.opacity = ".5"
            if(slidIndex == i) {
                dot.style.opacity = 1;
            }
        });

        showSlid()
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tubs.js":
/*!****************************!*\
  !*** ./js/modules/tubs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tubs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tubs */ "./js/modules/tubs.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_calcTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calcTime */ "./js/modules/calcTime.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_inputData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/inputData */ "./js/modules/inputData.js");
/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modalWindow */ "./js/modules/modalWindow.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");









window.addEventListener('DOMContentLoaded', () => {
    const timeOpen = setTimeout(() => (0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_5__.open)('.modal', openTimerId), 10000);

(0,_modules_tubs__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_modules_calcTime__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_modules_inputData__WEBPACK_IMPORTED_MODULE_4__["default"])(timeOpen)
;(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-modal]', '.modal', timeOpen)
;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])()
    

    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map