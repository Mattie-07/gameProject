import {ButtonGroup, ToggleButton} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {campaigncoopAction} from '../actions/campaigncoopAction'
import  '../assets/styles.css'

const style = {
    
}


const CoopToggle = () =>{
    const dispatch = useDispatch();
    const campaignCoop = useSelector(state => state.campaignCoop)

        return (
        <>
            <ButtonGroup toggle className="mb-2">
            <ToggleButton
                type="checkbox"
                // variant="primary"
                style={{backgroundColor:"#2B9348", color:"#FFFF3F", border:"white", margin:"20px", paddingLeft:"30px", paddingRight:"43px"}}
                checked={campaignCoop}
                value="1"
                onChange={(e) => dispatch(campaigncoopAction())}
            >
                Co-op
            </ToggleButton>
            </ButtonGroup>
            <br />
        </>
        );
    }
    
    export default CoopToggle;