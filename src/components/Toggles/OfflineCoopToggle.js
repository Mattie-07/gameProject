import {useDispatch, useSelector} from 'react-redux'
import {offlinecoopAction} from '../../actions/campaigncoopAction'
import {Button} from '../layout/ButtonStyle'


const OfflineCoopToggle = () =>{
    const dispatch = useDispatch();
    const offlinecoop = useSelector(state => state.offlinecoop)

        return (
        <>
            
            <Button
                type="checkbox"
                checked={offlinecoop}
                value="2"
                onClick ={(e)=> dispatch(offlinecoopAction())}>
                {offlinecoop ? "We play online": "We don't play with Randoms"}
            </Button>

            <br />
        </>
        );
    }
    
    export default OfflineCoopToggle;