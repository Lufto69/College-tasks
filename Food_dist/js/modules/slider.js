function slider() {
    const left = document.querySelector('#left'),
    right = document.querySelector('#right'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    sliderWrapper = document.querySelector('.offer__slider-wrapper'),
    cartSlide = document.querySelectorAll('.offer__slide');
    let slidIndex = 0,
    curSlid = 0;

    showSlid()
    activityPoints()
    showDot()

    if (curSlid <= 10){
        total.innerHTML = `0${curSlid + 1}`
    } else {
        total.innerHTML = curSlid + 1
    }

    left.addEventListener('click', () => {
        if(slidIndex > 0) {
            slidIndex--
        } else {
            slidIndex = curSlid
        }
        showDot()
    })

    right.addEventListener('click', () => {
        if(slidIndex < curSlid) {
            slidIndex++
        } else {
            slidIndex = 0
        }
        showDot()
    })

    function activityPoints() {
        const pintsWrap = document.createElement('div')
        pintsWrap.classList.add('carousel-indicators')
        sliderWrapper.append(pintsWrap)

        for(let i = 0; i <= curSlid; i++) {
            const point = document.createElement('div')
            point.classList.add('dot')
            point.setAttribute('data-slide-to', i);
            pintsWrap.append(point)

        }

        const points = document.querySelectorAll('.dot')
        points.forEach(point => {
            point.addEventListener('click', (e) => {
                points.forEach(p => {
                    p.style.opacity = 0.4
                })
                slidIndex = +e.target.getAttribute('data-slide-to')
                point.style.opacity = 1
                showSlid()     
            })
        })
        
    }

    function showSlid(){        
        cartSlide.forEach((item, index)=> {
            curSlid = index
            item.style.display = 'none'

            if(index === slidIndex){
                item.style.display = 'block'
            }
        })

        if (slidIndex < 9){
            current.innerHTML = `0${slidIndex + 1}`
        } else {
            current.innerHTML = slidIndex + 1
        }
    }

    function showDot(){
        const points = document.querySelectorAll('.dot')
        points.forEach((dot, i) => {
            dot.style.opacity = ".5"
            if(slidIndex == i) {
                dot.style.opacity = 1;
            }
        });

        showSlid()
    }
}

export default slider