import {LOGIN} from '../actions'
import {LOGOUT} from '../actions'
import {REGISTER} from '../actions'

const initialState = null

export default(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
        if(action.userdata){
            return action.userdata
        }else{
            return state
        }
        case LOGOUT:
            return null
        case REGISTER:
            return action.userdata
        default:
            return null
    }
}