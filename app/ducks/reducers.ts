import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import page1Reducer from './page1/reducer';
import page2Reducer from './page2/reducer';

const reducers = combineReducers({
    authReducer,
    page1Reducer,
    page2Reducer,
})

export default reducers;