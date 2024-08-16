import { useState, useEffect } from 'react';

import setContent from '../../utils/setContent';
import useMarvelService from '../../services/MarvelService'

import Background from '../../resources/img/Decoration.png'

import './randomCharacter.scss'
import '../../style/button.scss';

const RandomCharacter = () =>{
    const [char, setChar] = useState({})

    const {getCharacter, clearError, process, setProcess} = useMarvelService()

    useEffect(() => {
        updateChar()
    }, [])

    const onCharLoaded = (char) => {
        setChar(char)
    }

    const updateChar = () => {
        clearError()
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        getCharacter(id)
            .then(onCharLoaded)
            .then(() => setProcess('loaded'))
    }

    return (
        <section className='randomchar'>
                
            {setContent(process, <View char={char}/>)}

            <div className="randomchar__sections r__s-color">
                <h2 className='random__title'>Random character for today!<br/>Do you want to get to know him better?</h2>
                <h3 className='random__subtitle'>Or choose another one</h3>
                <button className="button button__main random__button" onClick={updateChar}>
                    <div className="inner">try it</div>
                </button>
                <img src={Background} alt="Декорация" className='random__background'/>
            </div>
        </section>
    )
    
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <div className="randomchar__sections">
            <img src={thumbnail} alt='Random Char' className='char__img' style={imgStyle}/>
            <div className="char__info">
                <div>
                    <h2 className="char__name">{name}</h2>
                    <p className="char__history">{description}</p>
                </div>
                <div className="char__buttons">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary but-second">
                        <div className="inner">Wiki</div>
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default RandomCharacter