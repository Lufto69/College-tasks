function cards() {
    class Card {
        constructor(src, subTitle, descr, valut, locate) {
            this.src = src
            this.subTitle = subTitle
            this.descr = descr
            this.valut = valut
            this.total = this.valut * 27
            this.locate = locate
        }

        create() {       
            let i = document.createElement('div');

            i.innerHTML = `
            <div class="menu__item">
                <img src="${this.src}" alt="vegy">
                <h3 class="menu__item-subtitle">${this.subTitle}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.total}</span> грн/месяц</div>
                </div>
            </div> `
            
            this.locate.append(i)
        }
    }
    const wrapper = document.querySelector('.wrap'); 
    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => res.forEach(({img, title, descr, price}) => {
        new Card(img, title, descr, price, wrapper).create()
    }))
}

export default cards