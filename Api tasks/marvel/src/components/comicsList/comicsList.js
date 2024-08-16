import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService'
import setContent from '../../utils/setContent';

import './comicsList.scss'

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [offset, setOffset] = useState(310)
    const [charEnded, setCharEnded] = useState(false)

    const {getAllComics, clearError, process, setProcess} = useMarvelService()

    useEffect(() => {
        onLoadedNewItem(offset, true)
    }, [])

    const onLoadedNewItem = (offset, inital) => {
        clearError()
        inital ? setLoaded(false) : setLoaded(true)

        getAllComics(offset)
            .then(onLoadedComics)
            .then(() => setProcess('loaded'))
    }

    const onLoadedComics = (newComicsListt) => {
        let ended = false
        if(newComicsListt.length < 8) {
            ended = true
        }

        setComicsList(comicsList => [...comicsList, ...newComicsListt])
        setLoaded(false)
        setOffset(offset => offset + 8)
        setCharEnded(ended)
    }

    const elements = (arr) => {
        const items = arr.map((item, i) => {

            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'contain'};
            }

            return (
                <li key={i}>
                    <Link className="comicslist__item" to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comicslist__item_img" />
                        <div className="comicslist__item_name">{item.title}</div>
                        <div className="comicslist__item_prise">{item.price}</div>
                    </Link>
                </li>
            )
        })

        return (
            <ul>
                {items}
            </ul>
        )
    }

    let renderItems = elements(comicsList)

    return (
        <div className='comicslist'>
            
            {setContent(process, renderItems)}

            <button 
                style = {{'display' : charEnded ? 'none' : 'block'}}
                className = "button button__main button__long" 
                onClick = {() => onLoadedNewItem(offset)} 
                disabled = {loaded}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList