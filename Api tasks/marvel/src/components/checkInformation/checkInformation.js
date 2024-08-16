import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import setContent from '../../utils/setContent';
import useMarvelService from '../../services/MarvelService'

import './checkInformation.scss'

const CheckInformation = (props) => {

    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useMarvelService()

    useEffect(() => {
        updateChar();
    }, [props.charId])

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }

        clearError()
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('loaded'))
    }

    const onCharLoaded = (char) => {
        setChar(char)
    }

    return(
        <div className="information">
            {setContent(process, <View char={char}/>)}
        </div>
    )
    
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
       <>
            <div className="information__main">
                <img src={thumbnail} alt={name} className="information__main_img" style={imgStyle}/>
                <div className="information__main_wrap">
                    <h3 className="name">{name}</h3>
                    <div className="information__buttons">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary but-second">
                            <div className="inner">Wiki</div>
                        </a> 
                    </div>
                </div>
            </div>
            <p className="information__text">{description}</p>
            <h4 className="information__title">Comics:</h4>
            <ul className="information__comics">
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((item, i) => {
                        if (i > 9) {
                            return;
                        } 

                        console.log(item.resourceURI.slice(/d/))
                        return (
                            <Link Link to={`/comics/${item.resourceURI.slice(43)}`}>
                                <li key={i} className="information__comics_item">
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })
                }                
            </ul>
        </>
    )
}

CheckInformation.propTypes = {
    charId: PropTypes.number
}

export default CheckInformation