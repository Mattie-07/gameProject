import {useDispatch, useSelector} from 'react-redux'    
import {onlinecoopincreaseAction} from '../../actions/campaigncoopAction'
import {onlinecoopdecreaseAction} from '../../actions/campaigncoopAction'
import {Container, Row, Col} from 'react-bootstrap'

const OfflineCounter = () => {
    
    const dispatch = useDispatch();
    const count = useSelector(state=> state.maxNumberOfOnlineCoop)

    return(
        <>
        <Container>
            <Row>
                <Col md={{offset:3}}><button  className="buttonStyle" onClick={()=>dispatch(onlinecoopdecreaseAction())}>Decrease Number of online coop players</button> </Col>       
                <Col md={{offset:2}} className="center">{count}</Col>  
                <Col md={{offset:3}}><button  className="buttonStyle" onClick={()=>dispatch(onlinecoopincreaseAction())}>Increase Number of online coop players</button></Col>
        </Row>
        </Container>
        </>
    )
}

export default OfflineCounter;