import {useDispatch, useSelector} from 'react-redux'    
import {maxofflineincreaseAction} from '../actions/campaigncoopAction'
import {maxofflinedecreaseAction} from '../actions/campaigncoopAction'
import '../assets/styles.css'
import {Container, Row, Col} from 'react-bootstrap'

const OfflineCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state=> state.maxNumberOfOfflineCoop)
    return(
        <>
        <Container>
            <Row>
                <Col md={{offset:3}}> <button  className="buttonStyle" onClick={()=>dispatch(maxofflinedecreaseAction())}>Decrease Number of offline players</button></Col>
                <Col md={{offset:2}} className="center">{count}</Col>        
                <Col md={{offset:3}}><button className="buttonStyle" onClick={()=>dispatch(maxofflineincreaseAction())}>Increase Number of offline players(limit 4)</button></Col>
            </Row>
        </Container>
        </>
    )
}

export default OfflineCounter;