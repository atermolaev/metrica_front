import * as cnst from './constants';
import { IAction } from '../../models/actions'

const initialState = {
    auth: false,
    token: '',
    isFetching: false,
}

function authReducer(state = initialState, action: IAction){
    switch(action.type){
        case cnst.AUTH_REQUEST:
            return Object.assign({}, state, { isFetching: true });
            break;
            
        case cnst.AUTH_SUCCESS:
            return Object.assign({}, state, {...action.payload.body, isFetching: false});
            break;

        case cnst.AUTH_FAILURE:
            return Object.assign({}, state, {...action.payload.body, isFetching: false});
            break;

        case cnst.AUTH_RESET:
            return Object.assign({}, state, initialState);
            break;
            
        default: 
            return state;
    }
}

export default authReducer;