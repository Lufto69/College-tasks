import './comicsBanner.scss'

import person from '../../resources/img/Avengers.png'
import logo from '../../resources/img/Avengers_logo.png'

const ComicsBanner = () => {
    return (
        <sections className='banner'>
            <img src={person} alt="Avengers" className='banner_img'/>
            <h2 className='banner__text'>New comics every week!<br/>Stay tuned!</h2>
            <img src={logo} alt="Logo" className='banner_img'/>
        </sections>
    )
}

export default ComicsBanner