import tubs from'./modules/tubs';
import calc from'./modules/calc';
import calcTime from'./modules/calcTime';
import cards from'./modules/cards';
import inputData from'./modules/inputData';
import modalWindow from'./modules/modalWindow';
import slider from'./modules/slider';
import { open } from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {
    const timeOpen = setTimeout(() => open('.modal', openTimerId), 10000);

tubs()
calc()
calcTime()
cards()
inputData(timeOpen)
modalWindow('[data-modal]', '.modal', timeOpen)
slider()
    

    
});