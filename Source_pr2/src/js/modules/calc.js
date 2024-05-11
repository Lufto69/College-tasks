export function calc() {
    const size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price');

    let sum = 0

    function update() {
        sum = Math.round((+size.value) * (+material.value) + (+options.value));

        if(size.value == '' || material.value == '') {
            calcPrice.textContent = "Пожалуйста, выберите размер и материал картины"
        } else if (promocode.value === '1') {
            calcPrice.textContent = Math.round(sum * 0.7)
        } else {
            calcPrice.textContent = sum
        }
    }

    size.addEventListener('change', update);
    material.addEventListener('change', update);
    options.addEventListener('change', update);
    promocode.addEventListener('input', update);
}