import {useDispatch, useSelector} from 'react-redux'
import {campaigncoopAction} from '../../actions/campaigncoopAction'
import {Button} from '../layout/ButtonStyle'

const CoopToggle = () =>{

    const dispatch = useDispatch();
    const campaignCoop = useSelector(state => state.campaignCoop)

        return (
        <>
            <Button
                type="checkbox"
                checked={campaignCoop}
                value="1"
                onClick = {(e) => dispatch(campaigncoopAction())}>
                {campaignCoop ? "coop" : "not coop"}
            </Button>
            <br />
        </>
        );
    }
    
    export default CoopToggle;