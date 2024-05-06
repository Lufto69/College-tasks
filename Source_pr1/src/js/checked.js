export function checked(){
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]'),
        calcInput = document.querySelectorAll('.calc-inp');

    function onlyNumbers(input){
        input.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });
        });
    }
    
    onlyNumbers(phoneInputs);
    onlyNumbers(calcInput);
}

