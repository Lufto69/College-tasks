import {getData} from '../services/request'

export function showeHiden() {

    const buttonTransparent = document.querySelector('.button-transparent'),
        contBlockImg = document.querySelector('.contBlockImg');

    buttonTransparent.addEventListener('click', () => {
        getData('http://localhost:3000/styles')
            .then(res => {
                res.forEach(({src, title, link}) => {
                    let element = document.createElement('div')
                    element.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')

                    element.innerHTML = `
                        <div class=styles-block>
                            <img src=${src} alt>
                            <h4>${title}</h4>
                            <a href=${link}>Подробнее</a>
                        </div>
                    `
                    contBlockImg.append(element)
                    buttonTransparent.style.display = 'none'
                });
            })
            .catch(error => console.log(error))
    })

    // buttonTransparent.addEventListener('click', () => {
    //     buttonTransparent.style.display = 'none'
    //     showeItems.forEach(e => {
    //         e.classList.remove('hidden-lg')
    //     })
    // })

    // const sizesBlock = document.querySelectorAll('.sizes-block')

    // sizesBlock.forEach((e, i) => {
    //     e.addEventListener('mouseover', () => {
    //         let img = e.querySelector('img')
    //         img.src = img.src.slice(0, -4) + '-1.png';

    //         e.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
    //             p.style.display = 'none';
    //         });
    //     })

    //     e.addEventListener('mouseout', () => {
    //         let img = e.querySelector('img')
    //         img.src = img.src.slice(0, -6) + '.png';

    //         e.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
    //             p.style.display = 'block';
    //         });
    //     })
    // })
    
}