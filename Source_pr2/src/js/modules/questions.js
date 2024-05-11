export function questions() {
    const accordionHeading = document.querySelectorAll('.accordion-heading'),
        accordionBlock = document.querySelectorAll('.accordion-block')

    accordionHeading.forEach((e, i) => {
        accordionBlock[i].style.display = 'none'

        e.addEventListener('click', () => {
            accordionBlock[i].style.display = (accordionBlock[i].style.display == 'none') ? '' : 'none'

        })
    })
}