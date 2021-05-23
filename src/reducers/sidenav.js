import {SIDENAV} from '../actions'

const initialState = {sideNav:false}

const sidenav = (state=initialState,action)=>{
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

export default sidenav;