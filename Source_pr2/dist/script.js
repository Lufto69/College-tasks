/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calc: () => (/* binding */ calc)
/* harmony export */ });
function calc() {
  const size = document.querySelector('#size'),
    material = document.querySelector('#material'),
    options = document.querySelector('#options'),
    promocode = document.querySelector('.promocode'),
    calcPrice = document.querySelector('.calc-price');
  let sum = 0;
  function update() {
    sum = Math.round(+size.value * +material.value + +options.value);
    if (size.value == '' || material.value == '') {
      calcPrice.textContent = "Пожалуйста, выберите размер и материал картины";
    } else if (promocode.value === '1') {
      calcPrice.textContent = Math.round(sum * 0.7);
    } else {
      calcPrice.textContent = sum;
    }
  }
  size.addEventListener('change', update);
  material.addEventListener('change', update);
  options.addEventListener('change', update);
  promocode.addEventListener('input', update);
}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forms: () => (/* binding */ forms)
/* harmony export */ });
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/request */ "./src/js/services/request.js");

function forms() {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    textarea = document.querySelectorAll('textarea'),
    upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  function clearInputs(item) {
    item.forEach(e => {
      e.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  }
  form.forEach(e => {
    e.addEventListener('submit', i => {
      i.preventDefault();
      const advert = document.createElement('div');
      advert.classList.add('status');
      e.parentNode.appendChild(advert);
      e.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        e.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      advert.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      advert.appendChild(textMessage);
      const formData = new FormData(e);
      (0,_services_request__WEBPACK_IMPORTED_MODULE_0__.postData)('assets/server.php', formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs(inputs);
        clearInputs(textarea);
        setTimeout(() => {
          advert.remove();
          e.style.display = 'block';
          e.classList.remove('fadeOutUp');
          e.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
}

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mask: () => (/* binding */ mask)
/* harmony export */ });
function mask(selector) {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
}
;

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
function menu() {
  const burger = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger-menu');
  burger.addEventListener('click', () => {
    burgerMenu.style.display = burgerMenu.style.display == 'block' ? '' : 'block';
  });
  window.addEventListener("orientationchange", () => {
    burgerMenu.style.display = '';
  });
}

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modal: () => (/* binding */ modal)
/* harmony export */ });
function modal() {
  const buttonDesign = document.querySelectorAll('.button-design'),
    buttonСonsultation = document.querySelectorAll('.button-consultation'),
    pulse = document.querySelectorAll('.pulse'),
    popupDesign = document.querySelector('.popup-design'),
    popupConsultation = document.querySelector('.popup-consultation'),
    popupGift = document.querySelector('.popup-gift');
  let currentClick = 0;
  function openAndCloseModal(tegIventButton, modalOpen) {
    tegIventButton.forEach(e => {
      e.addEventListener('click', () => {
        modalOpen.style.display = 'block';
        if (tegIventButton == pulse) pulse[0].style.display = 'none';
        currentClick++;
      });
    });
    modalOpen.addEventListener('click', e => {
      const cross = modalOpen.querySelector('.popup-close');
      if (e.target == modalOpen || e.target == cross) {
        modalOpen.style.display = 'none';
        currentClick++;
      }
    });
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      if (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight && currentClick === 0) {
        popupGift.style.display = 'block';
        if (tegIventButton == pulse) pulse[0].style.display = 'none';
      }
    });
    setTimeout(() => {
      if (currentClick === 0) popupConsultation.style.display = 'block';
    }, 60000);
  }
  openAndCloseModal(buttonDesign, popupDesign);
  openAndCloseModal(buttonСonsultation, popupConsultation);
  openAndCloseModal(pulse, popupGift);
}

/***/ }),

/***/ "./src/js/modules/questions.js":
/*!*************************************!*\
  !*** ./src/js/modules/questions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   questions: () => (/* binding */ questions)
/* harmony export */ });
function questions() {
  const accordionHeading = document.querySelectorAll('.accordion-heading'),
    accordionBlock = document.querySelectorAll('.accordion-block');
  accordionHeading.forEach((e, i) => {
    accordionBlock[i].style.display = 'none';
    e.addEventListener('click', () => {
      accordionBlock[i].style.display = accordionBlock[i].style.display == 'none' ? '' : 'none';
    });
  });
}

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
function scroll(upSelector) {
  // сделал всё стилем так удобнее и круче. И хотябы работает как нужно

  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  // let links = document.querySelectorAll('[href^="#"]'),
  //     speed = 0.3;

  // links.forEach(link => {
  //     link.addEventListener('click', function(event) {
  //         event.preventDefault();

  //         let widthTop = document.documentElement.scrollTop,
  //             hash = this.hash,
  //             toBlock = document.querySelector(hash).getBoundingClientRect().top,
  //             start = null;

  //         requestAnimationFrame(step);

  //         function step(time) {
  //             if (start === null) {
  //                 start = time;
  //             }

  //             let progress = time - start,
  //                 r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

  //                 document.documentElement.scrollTo(0, r);

  //             if (r != widthTop + toBlock) {
  //                 requestAnimationFrame(step);
  //             } else {
  //                 location.hash = hash;
  //             }
  //         }
  //     });
  // });
}

/***/ }),

/***/ "./src/js/modules/showeHiden.js":
/*!**************************************!*\
  !*** ./src/js/modules/showeHiden.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showeHiden: () => (/* binding */ showeHiden)
/* harmony export */ });
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/request */ "./src/js/services/request.js");

function showeHiden() {
  const buttonTransparent = document.querySelector('.button-transparent'),
    contBlockImg = document.querySelector('.contBlockImg');
  buttonTransparent.addEventListener('click', () => {
    (0,_services_request__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/styles').then(res => {
      res.forEach(({
        src,
        title,
        link
      }) => {
        let element = document.createElement('div');
        element.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        element.innerHTML = `
                        <div class=styles-block>
                            <img src=${src} alt>
                            <h4>${title}</h4>
                            <a href=${link}>Подробнее</a>
                        </div>
                    `;
        contBlockImg.append(element);
        buttonTransparent.style.display = 'none';
      });
    }).catch(error => console.log(error));
  });

  // buttonTransparent.addEventListener('click', () => {
  //     buttonTransparent.style.display = 'none'
  //     showeItems.forEach(e => {
  //         e.classList.remove('hidden-lg')
  //     })
  // })

  // const sizesBlock = document.querySelectorAll('.sizes-block')

  // sizesBlock.forEach((e, i) => {
  //     e.addEventListener('mouseover', () => {
  //         let img = e.querySelector('img')
  //         img.src = img.src.slice(0, -4) + '-1.png';

  //         e.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
  //             p.style.display = 'none';
  //         });
  //     })

  //     e.addEventListener('mouseout', () => {
  //         let img = e.querySelector('img')
  //         img.src = img.src.slice(0, -6) + '.png';

  //         e.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
  //             p.style.display = 'block';
  //         });
  //     })
  // })
}

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slider: () => (/* binding */ slider)
/* harmony export */ });
function slider() {
  const feedbackSliderItem = document.querySelectorAll('.feedback-slider-item'),
    mainPrevBtn = document.querySelector('.main-prev-btn'),
    mainNextBtn = document.querySelector('.main-next-btn'),
    mainSliderItem = document.querySelectorAll('.main-slider-item');
  function sliderInstructions(item, nextBtn, prevBtn, times) {
    let indexSlider = 0;
    const curentSlid = showeSlid(item);
    function showeSlid(item) {
      let curentSlid = 0;
      item.forEach((e, i) => {
        e.style.display = 'none';
        if (i === indexSlider) {
          e.style.display = 'block';
        }
        curentSlid++;
      });
      return curentSlid;
    }
    try {
      nextBtn.addEventListener('click', () => {
        indexSlider++;
        if (indexSlider >= curentSlid) {
          indexSlider = 0;
        }
        showeSlid(item);
      });
      prevBtn.addEventListener('click', () => {
        indexSlider--;
        if (indexSlider < 0) {
          indexSlider = curentSlid - 1;
        }
        showeSlid(item);
      });
    } catch (e) {
      setInterval(() => {
        indexSlider++;
        if (indexSlider >= curentSlid) {
          indexSlider = 0;
        }
        showeSlid(item);
      }, times);
    }
  }
  sliderInstructions(feedbackSliderItem, mainNextBtn, mainPrevBtn);
  sliderInstructions(mainSliderItem, undefined, undefined, 6000);
}

/***/ }),

/***/ "./src/js/modules/tubs.js":
/*!********************************!*\
  !*** ./src/js/modules/tubs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tubs: () => (/* binding */ tubs)
/* harmony export */ });
function tubs() {
  const portfolioMenu = document.querySelectorAll('.portfolio-menu > li'),
    portfolioBlock = document.querySelectorAll('.portfolio-block'),
    container = document.querySelector('.portfolio-no');
  function removeClass(item, classItem) {
    item.forEach(e => {
      e.classList.remove(classItem);
    });
  }
  portfolioMenu.forEach(e => {
    e.addEventListener('click', () => {
      let countItem = 0;
      removeClass(portfolioMenu, 'active');
      let atribut = e.getAttribute('class');
      e.classList.add('active');
      portfolioBlock.forEach(e => {
        e.style.display = 'none';
        if (e.classList.contains(atribut)) {
          countItem++;
          e.style.display = 'block';
        }
      });
      console.log(countItem);
      if (countItem == 0) {
        container.style.display = 'block';
      }
    });
  });
}

/***/ }),

/***/ "./src/js/modules/validation.js":
/*!**************************************!*\
  !*** ./src/js/modules/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validation: () => (/* binding */ validation)
/* harmony export */ });
function validation() {
  const nameInputs = document.querySelectorAll('input[name="name"]'),
    messageInputs = document.querySelectorAll('input[name="message"]'),
    phoneInputs = document.querySelectorAll('input[name="phone"]');
  function checked(inputs, expressed) {
    inputs.forEach(e => {
      e.addEventListener('input', () => {
        e.value = e.value.replace(expressed, '');
      });
    });
  }
  checked(nameInputs, /^[a-zA-Z0-9]/);
  checked(messageInputs, /^[a-zA-Z]/);
  checked(phoneInputs, /\D/);
}

/***/ }),

/***/ "./src/js/services/request.js":
/*!************************************!*\
  !*** ./src/js/services/request.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};
const getData = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/validation */ "./src/js/modules/validation.js");
/* harmony import */ var _modules_showeHiden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showeHiden */ "./src/js/modules/showeHiden.js");
/* harmony import */ var _modules_tubs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tubs */ "./src/js/modules/tubs.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/questions */ "./src/js/modules/questions.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");











window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();
  (0,_modules_validation__WEBPACK_IMPORTED_MODULE_1__.validation)();
  (0,_modules_showeHiden__WEBPACK_IMPORTED_MODULE_2__.showeHiden)();
  (0,_modules_tubs__WEBPACK_IMPORTED_MODULE_3__.tubs)();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.slider)();
  (0,_modules_questions__WEBPACK_IMPORTED_MODULE_5__.questions)();
  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_6__.menu)();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_7__.mask)('[name="phone"]');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__.calc)();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_9__.forms)();
  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_10__.scroll)('.pageup');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map