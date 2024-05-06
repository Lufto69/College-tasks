export function image() {
    const showe = document.createElement('div'),
        image = document.createElement('img'),
        wrap = document.querySelector('.works');

    showe.classList.add('popup')
    wrap.appendChild(showe)
    showe.appendChild(image)

    showe.style.cssText = 'display: none; justify-content: center; align-items: center;'

    wrap.addEventListener('click', e => {
        e.preventDefault();

        if (e.target && e.target.classList.contains('preview')) {
            showe.style.display = 'flex'
            let atribut = e.target.parentNode.getAttribute('href')
            image.setAttribute('src', atribut)
        }

        if (e.target && e.target.matches('div.popup')){
            showe.style.display = 'none'
        }
    })
}