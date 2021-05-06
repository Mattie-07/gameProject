import '../assets/styles.css'
import {Link} from 'react-router-dom'


const StartButton = () => {
    //global state not needed to use the start button
    
    return (
        <>
        <Link to="/explore">  
        Jump
        </Link>
        </>
    )
}

export default StartButton

