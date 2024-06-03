import spinner from '../../resources/gif/spiner.gif'

const Spinner = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%'}}>
            <img src={spinner} alt="spinner" style={{margin: '0 auto', width: '100px', height: 'auto'}}/>
        </div>
    )
}

export default Spinner