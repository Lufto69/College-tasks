export function validation() {

    const nameInputs = document.querySelectorAll('input[name="name"]'),
        messageInputs = document.querySelectorAll('input[name="message"]'),
        phoneInputs = document.querySelectorAll('input[name="phone"]')

    function checked(inputs, expressed) {
        inputs.forEach(e => {
            e.addEventListener('input', () => {
                e.value = e.value.replace(expressed, '');
            })
        })
    }

    checked(nameInputs, /^[a-zA-Z0-9]/)
    checked(messageInputs, /^[a-zA-Z]/)
    checked(phoneInputs, /\D/)
}