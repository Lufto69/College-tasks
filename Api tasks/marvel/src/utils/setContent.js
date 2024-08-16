import Spinner from '../components/spinner/spinner';
import Error from '../components/Error/Error';
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (process, Component) => {
    switch (process) {
        case 'waiting': 
            return <Skeleton/>
        case 'loading': 
            return <Spinner/>
        case 'loaded': 
            return Component
        case 'error':
            return <Error/>
        default:
            return new Error('Unexpected process state')
    }
}

export default setContent