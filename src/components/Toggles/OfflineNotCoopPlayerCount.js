import {useDispatch, useSelector} from 'react-redux'    
import {offlineNotCoopIncreaseAction } from '../../actions/campaigncoopAction'
import {offlineNotCoopDecreaseAction} from '../../actions/campaigncoopAction'
import {Container, Row, Col} from 'react-bootstrap'

const OfflineNotCoopCounter = () => {
    
    const dispatch = useDispatch();
    const count = useSelector(state=> state.offlinePlayerMax)


    return(
        <>
        <Container>
            <Row >
                <Col md={{offset:3}}> <button  className="buttonStyle" onClick={()=>dispatch(offlineNotCoopDecreaseAction())}>Decrease Number of offline players you would prefer</button> </Col>
                <Col md={{offset:2}} className="center"> <p>{count}</p></Col>
                <Col md={{offset:3}}><button  className="buttonStyle" onClick={()=>dispatch(offlineNotCoopIncreaseAction ())}>Increase Number of offline players you would prefer</button>   </Col>
            </Row>
        </Container>
        </>
    )
}

export default OfflineNotCoopCounter;