import {ButtonGroup, ToggleButton} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {onlinecoopAction} from '../actions/campaigncoopAction'


const CoopToggle = () =>{
    const dispatch = useDispatch();
    const campaignCoop = useSelector(state => state.dropin)

        return (
        <>
            <ButtonGroup toggle className="mb-2">
            <ToggleButton
                type="checkbox"
                variant="secondary"
                checked={campaignCoop}
                value="1"
                onChange={(e) => dispatch(onlinecoopAction())}
            >
                Drop in coop
            </ToggleButton>
            </ButtonGroup>
            <br />
        </>
        );
    }
    
    export default CoopToggle;