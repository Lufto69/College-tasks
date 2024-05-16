export function tubs() {
    const portfolioMenu = document.querySelectorAll('.portfolio-menu > li'),
        portfolioBlock = document.querySelectorAll('.portfolio-block'),
        container = document.querySelector('.portfolio-no')

    function removeClass(item, classItem) {
        item.forEach(e => {
            e.classList.remove(classItem)
        })
    }

    portfolioMenu.forEach(e => {
        e.addEventListener('click', () => {
            let countItem = 0

            removeClass(portfolioMenu, 'active')
            let atribut = e.getAttribute('class')
            e.classList.add('active')

            portfolioBlock.forEach(e => {
                e.style.display = 'none'

                if(e.classList.contains(atribut)){
                    countItem++
                    e.style.display = 'block'
                }
            })
            console.log(countItem)
            if(countItem == 0){
                container.style.display = 'block'
            }
        })
    })
}