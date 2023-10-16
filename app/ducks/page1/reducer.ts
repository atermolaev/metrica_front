import * as at from './constants';
import { IAction } from '../../models/actions'

const initialState = {
    cource: {}
}

function page1Reducer(state = initialState, action:IAction){
    switch(action.type){
        case at.MONEY_COURCE_SUCCESS:
            return Object.assign({}, state, {cource: action.obj});

        case at.MONEY_COURCE_FAILURE:
            return Object.assign({}, state, {cource: action.error})
            
        default: 
            return state;
    }
}

export default page1Reducer;