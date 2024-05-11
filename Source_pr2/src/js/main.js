import {modal} from './modules/modal' 
import {validation} from './modules/validation'
import {showeHiden} from './modules/showeHiden'
import {tubs} from './modules/tubs'
import {slider} from './modules/slider'
import {questions} from './modules/questions'
import {menu} from './modules/menu'
import {mask} from './modules/mask'
import {calc} from './modules/calc'
import {forms} from './modules/forms'
import {scroll} from './modules/scroll'

window.addEventListener('DOMContentLoaded', () => {
    modal()
    validation()
    showeHiden()
    tubs()
    slider()
    questions()
    menu()
    mask('[name="phone"]')
    calc()
    forms()
    scroll('.pageup')
})
