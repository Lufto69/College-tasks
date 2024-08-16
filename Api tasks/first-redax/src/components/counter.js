import {inc, rnd, dec} from '../actions'
import { useSelector, useDispatch } from "react-redux"

const Conter = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <>
            <div className='cur'>{counter}</div>
            <button onClick={() => dispatch(inc())} className='inc'>inc</button>
            <button onClick={() => dispatch(dec())} className='dec'>dec</button>
            <button onClick={() => dispatch(rnd())} className='rnd'>rnd</button>
        </>
    )
}

export default Conter