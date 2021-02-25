import {v1 as uuidv1} from 'uuid'

let initialState = {
    id:uuidv1(),
    campaignCoop: true,
    dropin:true,
    offlinecoop:true,
    onlinecoop:true,
    maxNumberOfOfflineCoop:2,
    maxNumberOfOnlineCoop:2,
    offlinePlayerMax:2,
    onlinePlayerMax:2,
    platform: null,// look for platform ids
}

const reducer = (state, action) => {
    if(state === undefined)
        state = initialState

    switch(action.type){
        case 'CAMPAIGNCOOP':
            return{
                ...state,
            campaignCoop: !state.campaignCoop,
            }
        case 'DROPIN':
            return{
                ...state,
            dropin: !state.dropin
            }
        case 'OFFLINECOOP':
            return{
                ...state,
                offlinecoop: !state.offlinecoop,
            }
        case 'ONLINECOOP':  
            return{
                ...state,
                onlinecoop: !state.onlinecoop,
            }
        case 'MAXNUMBEROFOFFLINECOOPINCREASE':
            return{
                ...state,
                maxNumberOfOfflineCoop: state.maxNumberOfOfflineCoop < 4 ? state.maxNumberOfOfflineCoop + 1 : state.maxNumberOfOfflineCoop = 4
            }
        case 'MAXNUMBEROFOFFLINECOOPDECREASE':
            return{
                ...state,
                maxNumberOfOfflineCoop: state.maxNumberOfOfflineCoop > 0 ? state.maxNumberOfOfflineCoop - 1 : state.maxNumberOfOfflineCoop = 0
            }
        case 'MAXNUMBEROFONLINECOOPINCREASE':
            return{
                ...state,
                maxNumberOfOnlineCoop: state.maxNumberOfOnlineCoop < 150 ? state.maxNumberOfOnlineCoop + 1 : state.maxNumberOfOnlineCoop = 150
                }
        case 'MAXNUMBEROFONLINECOOPDECREASE':
            return{
                ...state,
                maxNumberOfOnlineCoop: state.maxNumberOfOnlineCoop > 0 ? state.maxNumberOfOnlineCoop -1 : state.maxNumberOfOnlineCoop = 0 
                }
        case 'OFFLINEPLAYERSINCREASE':
            return{
                ...state,
                offlinePlayerMax: state.offlinePlayerMax < 150 ? state.offlinePlayerMax + 1 : state.offlinePlayerMax = 150  
            }
        case 'OFFLINEPLAYERSDECREASE':
            return{
                ...state,
                offlinePlayerMax: state.offlinePlayerMax > 0 ? state.offlinePlayerMax - 1 : state.offlinePlayerMax = 0
            }
        case 'ONLINEPLAYERINCREASE':
            return{
                ...state,
                onlinePlayerMax: state.onlinePlayerMax < 4 ? state.onlinePlayerMax + 1 : state.onlinePlayerMax = 4
            }
        case 'ONLINEPLAYERDECREASE':
            return{
                ...state,
                onlinePlayerMax: state.onlinePlayerMax > 0 ? state.onlinePlayerMax - 1 : state.onlinePlayerMax =0
            }
        case 'PLATFORM':
            return{
                ...state,
            platform: null // I could do a seperate button for each console, which would make it easier for the user, or I could have an input field for them, which would make it easier for myself.
            // when I let the user click the button, the button click will return the corresponding platform id from the API
            }
        default:
            return state;
            }
        }
export default reducer
