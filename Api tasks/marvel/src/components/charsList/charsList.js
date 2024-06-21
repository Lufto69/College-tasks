import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

import Spinner from '../spinner/spinner';
import Error from '../Error/Error';
import useMarvelService from '../../services/MarvelService'

import './charsList.scss'

const CharsList = (props) => {

    const [charList, setCharList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(310)
    const [charEnded, setCharEnded] = useState(false)

    const {loading, error, getAllCharacters, clearError} = useMarvelService()

    useEffect(() => {
        onLoadingNewElements(offset, true)
    }, [])

    const onCharListLoaded = (newCharList) => {
        let ended = false
        if(newCharList.length < 9) {
            ended = true
        }

        setCharList(charList => [...charList, ...newCharList])
        setNewItemLoading(false)
        setOffset(offset => offset + 9)
        setCharEnded(ended)
    }

    const onLoadingNewElements = (offset, inital) => {
        inital ? setNewItemLoading(false) : setNewItemLoading(true)
        
        clearError()
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const itemRefs = useRef([]);

    const focusOnItem  = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('active'));
        itemRefs.current[id].classList.add('active');
        itemRefs.current[id].focus();
    }

    const elements = (arr) => {
        const items = arr.map((item, i) => {

            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'contain'};
            }

            return (
                <li className="charslist__item" 
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
                    key={item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}>
                    <img src={item.thumbnail} alt={item.name} className="charslist__item_img" style={imgStyle}/>
                    <div className="charslist__item_name">{item.name}</div>
                </li>
            )
        })

        return (
            <ul className='charslist__gred'>
                {items}
            </ul>
        )
    }

    let renderItems = elements(charList)

    return (
        <div className="charslist">

            {error ? <Error/> : loading && !newItemLoading ? <Spinner/> : renderItems}
            
            <button 
                className="button button__main button__long" 
                onClick={() => onLoadingNewElements(offset)}
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}


CharsList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharsList