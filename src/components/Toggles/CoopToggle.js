import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {campaigncoopAction} from '../../actions/campaigncoopAction'
import {Button} from '../layout/ButtonStyle'

const CoopToggle = () =>{

    const[coop, setCoop] = useState("")
    const coopFunction = () =>{
        setCoop(!coop)
    }


    const dispatch = useDispatch();
    const campaignCoop = useSelector(state => state.campaignCoop)

        return (
        <>
            <Button
                toggle
                checked={campaignCoop}
                value="1"
                onChange={(e) => dispatch(campaigncoopAction())}
                onClick={coopFunction}>
                {coop ? "coop" : "not coop"}
                </Button>
            <br />
        </>
        );
    }
    
    export default CoopToggle;