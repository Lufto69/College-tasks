import { Component } from 'react';
import Header from "../header/header"
import RandomCharacter from "../randomCharacter/randomCharacter"
import CharsList from "../charsList/charsList"
import CheckInformation from "../checkInformation/checkInformation"
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

// import ComicsBanner from "../comicsBanner/comicsBanner"
// import ComicsList from "../comicsList/comicsList"

import decoration from '../../resources/img/bg_asset.png'

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return(
            <div className="app">
                <Header></Header>
                <main>
                    <ErrorBoundary>
                        <RandomCharacter></RandomCharacter>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharsList onCharSelected={this.onCharSelected}></CharsList>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CheckInformation charId={this.state.selectedChar}></CheckInformation>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App