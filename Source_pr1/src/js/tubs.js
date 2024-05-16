export function tubs() {
    const tubsItem = document.querySelectorAll('.glazing_content'),
        image = document.querySelectorAll('.fadeInUp > img'),
        textLink = document.querySelectorAll('.fadeInUp > a'),

        tubsItemToo = document.querySelectorAll('.tub_item'),
        textLinkToo = document.querySelectorAll('.aaaaa');


    function generateTub(tubsItem, textLink, image, classActive) {
        let indexTub = 0

        function showTub() {
            tubsItem.forEach(e => {
                e.style.display = 'none'
            })
    
            tubsItem[indexTub].style.display = 'block'

            if(classActive) {
                textLink.forEach(item => {
                    item.classList.remove(classActive)
                })
                textLink[indexTub].classList.add(classActive)
            }
        }
        showTub()
    
        function trigerItem(trigerElement){
            trigerElement.forEach((e, i) => {
                e.addEventListener('click', () => {
                    indexTub = i;
                    showTub()
                })
            })
        }

        if(image) {
            trigerItem(image)
        }

        trigerItem(textLink)
    }  
    
    generateTub(tubsItem, textLink, image)
    generateTub(tubsItemToo, textLinkToo, undefined, 'after_click')


}