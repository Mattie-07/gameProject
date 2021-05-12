import {ButtonGroup, ToggleButton} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {dropinAction} from '../../actions/campaigncoopAction'
import {useState} from 'react'
import {Button} from '../layout/ButtonStyle'

const DropinToggle = () =>{

    const[coop, setCoop] = useState("")
    const coopFunction = () =>{
        setCoop(!coop)
    }


    const dispatch = useDispatch();
    const campaignCoop = useSelector(state => state.dropin)

        return (
        <>
            
            <ButtonGroup toggle className="mb-2">
            <ToggleButton
                type="checkbox"
                
                checked={campaignCoop}
                value="1"
                onChange={(e) => dispatch(dropinAction())}
                onClick={coopFunction}
            >
                    Dropin
            </ToggleButton>
            </ButtonGroup>
            <br />
        </>
        );
    }
    
    export default DropinToggle;