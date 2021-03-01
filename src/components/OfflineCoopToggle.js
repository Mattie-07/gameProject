import {ButtonGroup, ToggleButton} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {offlinecoopAction} from '../actions/campaigncoopAction'


const CoopToggle = () =>{
    const dispatch = useDispatch();
    const campaignCoop = useSelector(state => state.dropin)

        return (
        <>
            <ButtonGroup toggle className="mb-2">
            <ToggleButton
                type="checkbox"
                style={{backgroundColor:"#2B9348", color:"#FFFF3F", border:"white", margin:"20px"}}
                checked={campaignCoop}
                value="1"
                onChange={(e) => dispatch(offlinecoopAction())}
            >
                Offline Cooperative
            </ToggleButton>
            </ButtonGroup>
            <br />
        </>
        );
    }
    
    export default CoopToggle;