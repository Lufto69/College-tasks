import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './SingleComic.scss';

const SingleComic = () => {
    const [comics, setComics] = useState({})
    const {getComics, clearError, process, setProcess} = useMarvelService()
    const {comicId} = useParams()

    useEffect(() => {
        onGetComics()
    }, [comicId])

    const onComicsLoaded = (Comics) => {
        setComics(Comics)
    }

    const onGetComics = () => {
        clearError()
        getComics(comicId)
            .then(onComicsLoaded)
            .then(() => setProcess('loaded'))
    }

    return (
        <>
            {setContent(process, <View comics={comics}/>)}
        </>
    )
}

const View = ({comics}) => {
    return (
        <div className="single-comic">
            <img src={comics.thumbnail}  alt="x-men" className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{comics.title}</h2>
                <p className="single-comic__descr">{comics.description}</p>
                <p className="single-comic__descr">{comics.pageCount}</p>
                <p className="single-comic__descr">{`Language: ${comics.language}`}</p>
                <div className="single-comic__price">{comics.price}</div>
            </div>
            <Link to={'/comics'} className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComic;