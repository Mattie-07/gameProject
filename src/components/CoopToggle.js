import {ButtonGroup, ToggleButton} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {campaigncoopAction} from '../actions/campaigncoopAction'


const CoopToggle = () =>{
    const dispatch = useDispatch();
    const campaignCoop = useSelector(state => state.campaignCoop)

        return (
        <>
            <ButtonGroup toggle className="mb-2">
            <ToggleButton
                type="checkbox"
                variant="secondary"
                checked={campaignCoop}
                value="1"
                onChange={(e) => dispatch(campaigncoopAction())}
            >
                Coop
            </ToggleButton>
            </ButtonGroup>
            <br />
        </>
        );
    }
    
    export default CoopToggle;