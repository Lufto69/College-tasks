import { Link } from "react-router-dom"
import Error from "../Error/Error"

const Page404 = () => {
    return (
        <div style={{padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
            <Error></Error>
            <Link style={{marginTop: '30px'}} to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404