import { Link, NavLink } from 'react-router-dom';

import './header.scss'

const header = () => {
    return (
        <header className="app__header">
            <h1 className="app__title"><Link to="/"><span>Maevel</span> information portal</Link></h1>
            <nav className='app__navigation'>
                <ul>
                    <li><NavLink 
                        end 
                        className={({isActive}) => (isActive ? 'activeNav' : '')} 
                        to='/'>Characters</NavLink></li>
                    /
                    <li><NavLink 
                        className={({isActive}) => (isActive ? 'activeNav' : '')} 
                        to='/comics'>Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default header