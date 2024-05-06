import '../index.html';
import 'Css/style.css';
import 'Css/animate.min.css';
import 'Css/bootstrap.css';
import {modal} from './modal.js';
import {tubs} from './tubs.js';
import {timer} from './timer.js';
import {image} from './image.js';
import {getData} from './getData.js';
import {checked} from './checked.js';
import {calcForm} from './calcForm.js';

let dataCalcForm = {
    form: 0,
    prifileType: 'Холодное',
    viewType: 'Деревянное остеклкние',
}


modal()
tubs()
timer()
image()
getData(dataCalcForm)
checked()
calcForm(dataCalcForm)