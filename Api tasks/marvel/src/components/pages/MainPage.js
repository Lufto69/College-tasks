import { useState } from 'react';

import RandomCharacter from "../randomCharacter/randomCharacter"
import CharsList from "../charsList/charsList"
import CheckInformation from "../checkInformation/checkInformation"
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/bg_asset.png'

const MainPage = () => {

    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id)
    }
    return (
        <>
            <ErrorBoundary>
                <RandomCharacter></RandomCharacter>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharsList onCharSelected={onCharSelected}></CharsList>
                </ErrorBoundary>
                <ErrorBoundary>
                    <CheckInformation charId={selectedChar}></CheckInformation>
                </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage