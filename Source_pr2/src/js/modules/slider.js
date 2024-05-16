export function slider() {
    const feedbackSliderItem = document.querySelectorAll('.feedback-slider-item'),
        mainPrevBtn = document.querySelector('.main-prev-btn'),
        mainNextBtn = document.querySelector('.main-next-btn'),

        mainSliderItem = document.querySelectorAll('.main-slider-item')


    function sliderInstructions(item, nextBtn, prevBtn, times) {
        let indexSlider = 0
        const curentSlid = showeSlid(item)

        function showeSlid(item) {
            let curentSlid = 0
    
            item.forEach((e, i) => {
                e.style.display = 'none'
                if(i === indexSlider) {
                    e.style.display = 'block'
                }
                curentSlid++
            })
            return curentSlid
        }
        
        try {
            nextBtn.addEventListener('click', () => {
                indexSlider++
    
                if(indexSlider >= curentSlid) {
                    indexSlider = 0;
                }
                showeSlid(item)
            })
    
            prevBtn.addEventListener('click', () => {
                indexSlider--
    
                if(indexSlider < 0) {
                    indexSlider = curentSlid - 1;
                }
    
                showeSlid(item)
            })
        } catch(e){
            setInterval(() => {
                indexSlider++
    
                if(indexSlider >= curentSlid) {
                    indexSlider = 0;
                }
                showeSlid(item)
            }, times)
        }


        
    }

    sliderInstructions(feedbackSliderItem, mainNextBtn, mainPrevBtn)
    sliderInstructions(mainSliderItem, undefined, undefined, 6000)
}