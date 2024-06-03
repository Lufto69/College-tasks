import './comicsList.scss'

import comics from '../../resources/img/x-men.png'

const comicsList = () => {
    return (
        <div className='comicslist'>
            <ul>
                <li>
                    <div className="comicslist__item">
                        <img src={comics} alt="comics" className="comicslist__item_img" />
                        <div className="comicslist__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comicslist__item_prise">9.99$</div>
                    </div>
                </li>
                <li>
                    <div className="comicslist__item">
                        <img src={comics} alt="comics" className="comicslist__item_img" />
                        <div className="comicslist__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comicslist__item_prise">9.99$</div>
                    </div>
                </li>
                <li>
                    <div className="comicslist__item">
                        <img src={comics} alt="comics" className="comicslist__item_img" />
                        <div className="comicslist__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comicslist__item_prise">9.99$</div>
                    </div>
                </li>
                <li>
                    <div className="comicslist__item">
                        <img src={comics} alt="comics" className="comicslist__item_img" />
                        <div className="comicslist__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comicslist__item_prise">9.99$</div>
                    </div>
                </li>
                <li>
                    <div className="comicslist__item">
                        <img src={comics} alt="comics" className="comicslist__item_img" />
                        <div className="comicslist__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comicslist__item_prise">9.99$</div>
                    </div>
                </li>
                <li>
                    <div className="comicslist__item">
                        <img src={comics} alt="comics" className="comicslist__item_img" />
                        <div className="comicslist__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comicslist__item_prise">9.99$</div>
                    </div>
                </li>
                <li>
                    <div className="comicslist__item">
                        <img src={comics} alt="comics" className="comicslist__item_img" />
                        <div className="comicslist__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comicslist__item_prise">9.99$</div>
                    </div>
                </li>
                <li>
                    <div className="comicslist__item">
                        <img src={comics} alt="comics" className="comicslist__item_img" />
                        <div className="comicslist__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comicslist__item_prise">9.99$</div>
                    </div>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default comicsList