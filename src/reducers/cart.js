import {ADDCART} from '../actions'
import {UPDATECART} from '../actions'

const initialState = {}

const cart = (state=initialState,action)=>{
    switch(action.type){
        case ADDCART:
            return action.orderData
        case UPDATECART:
            let updated = {
                id:state.id,
                itemInfo:action.itemInfo,
                status:state.status,
                uid:state.uid
            }
            return updated
        default:
            return state
    }
}
export default cart;