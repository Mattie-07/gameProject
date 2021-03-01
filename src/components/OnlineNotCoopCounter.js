import {useDispatch, useSelector} from 'react-redux'    
import {onlineNotCoopIncreaseAction} from '../actions/campaigncoopAction'
import {onlineNotCoopDecreaseAction} from '../actions/campaigncoopAction'
import {Container, Row, Col} from 'react-bootstrap'
import '../assets/styles.css'

const OnlineNotCoopCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state=> state.onlinePlayerMax)
    return(
        <>
        <Container>
            <Row>
                <Col md={{offset:3}}><button  className="buttonStyle" onClick={()=>dispatch(onlineNotCoopDecreaseAction())}>Decrease Number of online cooperative players you prefer to play with</button></Col>
                <Col md={{offset:2}} className="center">{count}</Col>  
                <Col md={{offset:3}}> <button className="buttonStyle" onClick={()=>dispatch(onlineNotCoopIncreaseAction())}>Increase Number of online cooperative players you prefer to play with (limit 4)</button></Col>
        </Row>
        </Container>
        </>

    )
}

export default OnlineNotCoopCounter;