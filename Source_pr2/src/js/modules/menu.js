export function menu() {
    const burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu')

        burger.addEventListener('click', () => {
            burgerMenu.style.display = (burgerMenu.style.display == 'block') ? '' : 'block'
        })

        window.addEventListener("orientationchange", () => {
            burgerMenu.style.display = ''
        })
}