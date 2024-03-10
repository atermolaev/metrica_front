import * as cnst from './constants';
import { IAction } from '../../models/actions'

const initialState = {
    login: '',
    pass: '',
}

function authReducer(state = initialState, action: IAction){
    switch(action.type){
        case cnst.AUTH_SUCCESS:
            return Object.assign({}, state, {cource: action.obj});

        case cnst.AUTH_FAILURE:
            return Object.assign({}, state, {cource: action.error})
            
        default: 
            return state;
    }
}

export default authReducer;