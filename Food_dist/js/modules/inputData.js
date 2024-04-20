import { open, close } from "./modalWindow";

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
        open('.modal', openTimerId)

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
            close('.modal')
            modalDialog.classList.remove('hide')
        }, 3000)
    }
}

export default inputData