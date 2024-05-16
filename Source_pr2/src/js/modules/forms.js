import {postData} from '../services/request'

export function forms() {

    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          textarea = document.querySelectorAll('textarea'),
          upload = document.querySelectorAll('[name="upload"]')

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    }

    function clearInputs(item) {
        item.forEach(e => {
            e.value = ''
        })
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
    }

    form.forEach(e => {
        e.addEventListener('submit', (i) => {
            i.preventDefault()
            
            const advert = document.createElement('div')
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

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs(inputs);
                    clearInputs(textarea);
                    setTimeout(() => {
                        advert.remove();
                        e.style.display = 'block';
                        e.classList.remove('fadeOutUp');
                        e.classList.add('fadeInUp');
                    }, 5000);
                })
        })
    })

}