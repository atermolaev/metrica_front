import * as cnst from './constants';
import { IAction } from '../../models/actions'

const initialState = {
    auth: false,
    token: '',
}

function authReducer(state = initialState, action: IAction){
    switch(action.type){
        case cnst.AUTH_SUCCESS:
            return Object.assign({}, state, {...action.payload.body});

        case cnst.AUTH_FAILURE:
            return Object.assign({}, state, {...action.payload.body})
            
        default: 
            return state;
    }
}

export default authReducer;