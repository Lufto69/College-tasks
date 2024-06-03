import { Component } from 'react';
import PropTypes from 'prop-types'

import Spinner from '../spinner/spinner';
import Error from '../Error/Error';
import Skeleton from '../skeleton/Skeleton';
import MarvelService from '../../services/MarvelService'

import './checkInformation.scss'

class checkInformation extends Component {
    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps){
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const {char, loading, error} = this.state

        const skeleton = char || loading || error ? null : <Skeleton/>;
        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return(
            <div className="information">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, desctiptoin, thumbnail, homepage, wiki, comics} = char

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
            <p className="information__text">{desctiptoin}</p>
            <h4 className="information__title">Comics:</h4>
            <ul className="information__comics">
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((item, i) => {
                        if (i > 9) {
                            return;
                        } 
                        return (
                            <li key={i} className="information__comics_item">
                                {item.name}
                            </li>
                        )
                    })
                }                
            </ul>
        </>
    )
}

checkInformation.propTypes = {
    charId: PropTypes.number
}

export default checkInformation