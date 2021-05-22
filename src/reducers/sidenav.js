import {SIDENAV} from '../actions'

const initialState = {sideNav:false}

export default(state=initialState,action)=>{
    switch(action.type){
        case SIDENAV:
            if(action.onClose){
                return {sideNav:action.onClose}
            }else{
                return {sideNav:!state.sideNav}
            }
        default:
            return state
    }
}