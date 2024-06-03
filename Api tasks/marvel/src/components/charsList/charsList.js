import { Component } from 'react';
import PropTypes from 'prop-types'

import Spinner from '../spinner/spinner';
import Error from '../Error/Error';
import MarvelService from '../../services/MarvelService'

import './charsList.scss'

class CharsList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 310,
        charEnded: false
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.onLoadingNewElements()
    }

    onCharListLoaded = (newCharList) => {
        let ended = false
        if(newCharList.length < 9) {
            ended = true
        }

        this.setState(({charList, offset}) => ({
            charList: [...charList, ...newCharList], 
            loading: false, 
            newItemLoading: false, 
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }

    onCharLoaded = () => {
        this.setState({newItemLoading: true})
    }

    onLoadingNewElements = (offset) => {
        this.onCharLoaded()

        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
    }

    focusOnItem  = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('active'));
        this.itemRefs[id].classList.add('active');
        this.itemRefs[id].focus();
    }

    elements(arr) {
        const items = arr.map((item, i) => {

            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'contain'};
            }

            return (
                <li className="charslist__item" 
                    tabIndex={0}
                    ref={this.setRef}
                    key={item.id}
                    onClick={() => {
                        this.props.onCharSelected(item.id);
                        this.focusOnItem(i);
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

    render() {        
        const {charList, error, loading, newItemLoading, offset, charEnded} = this.state
        const items = this.elements(charList)

        return (
            <div className="charslist">

                {error ? <Error/> : loading ? <Spinner/> : items}
                
                <button 
                    className="button button__main button__long" 
                    onClick={() => this.onLoadingNewElements(offset)}
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharsList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharsList