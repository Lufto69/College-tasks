import './header.scss'

const header = () => {
    return (
        <header className="app__header">
            <h1 className="app__title"><a href="#"><span>Maevel</span> information portal</a></h1>
            <nav className='app__navigation'>
                <ul>
                    <li><a href='#'>Characters</a></li>/
                    <li><a href='#'>Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default header