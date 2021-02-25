import '../assets/styles.css'
import {Link} from 'react-router-dom'


const StartButton = (props) => {
    //global state not needed to use the start button
    
    return (
        <>
        <Link to="/explore">  
        jump
        {/* <button className="btn">Jump </button> */}
        </Link>
        </>
    )
}

export default StartButton

