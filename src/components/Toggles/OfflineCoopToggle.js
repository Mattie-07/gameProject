import {useDispatch, useSelector} from 'react-redux'
import {offlinecoopAction} from '../../actions/campaigncoopAction'
import {Button} from '../layout/ButtonStyle'


const OfflineCoopToggle = () =>{
    const dispatch = useDispatch();
    const dropIn = useSelector(state => state.dropin)

        return (
        <>
            
            <Button
                type="checkbox"
                checked={dropIn}
                value="1"
                onClick ={(e)=> dispatch(offlinecoopAction())}>
                {dropIn ? "We play online": "We don't play with Randoms"}
            </Button>

            <br />
        </>
        );
    }
    
    export default OfflineCoopToggle;