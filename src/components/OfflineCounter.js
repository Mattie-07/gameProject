import {useDispatch, useSelector} from 'react-redux'    
import {maxofflineincreaseAction} from '../actions/campaigncoopAction'
import {maxofflinedecreaseAction} from '../actions/campaigncoopAction'

const OfflineCounter = () => {
    
    const dispatch = useDispatch();
    const count = useSelector(state=> state.maxNumberOfOfflineCoop)


    return(
        <>
        <p>{count}</p>
        <button onClick={()=>dispatch(maxofflineincreaseAction())}>Increase Number of offline players</button>
        <button onClick={()=>dispatch(maxofflinedecreaseAction())}>Decrease Number of offline players</button>
        </>
    )
}

export default OfflineCounter;