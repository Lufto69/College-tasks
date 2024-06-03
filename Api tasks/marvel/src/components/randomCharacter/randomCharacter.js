import { Component } from 'react';
import Spinner from '../spinner/spinner';
import Error from '../Error/Error';
import MarvelService from '../../services/MarvelService'

import Background from '../../resources/img/Decoration.png'

import './randomCharacter.scss'
import '../../style/button.scss';

class RandomCharacter extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.updateChar()
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }

    onUpdate = () => {
        this.setState({loading: true})
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        this.onUpdate()
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state

        return (
            <section className='randomchar'>
                 
                {error ? <Error/> : loading ? <Spinner/> : <View char={char}/>}

                <div className="randomchar__sections r__s-color">
                    <h2 className='random__title'>Random character for today!<br/>Do you want to get to know him better?</h2>
                    <h3 className='random__subtitle'>Or choose another one</h3>
                    <button className="button button__main random__button" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={Background} alt="Декорация" className='random__background'/>
                </div>
            </section>
        )
    }
}

const View = ({char}) => {
    const {name, desctiptoin, thumbnail, homepage, wiki} = char

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
                    <p className="char__history">{desctiptoin}</p>
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