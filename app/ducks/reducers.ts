import { combineReducers } from 'redux';

import page1Reducer from './page1/reducer';
import page2Reducer from './page2/reducer';

const reducers = combineReducers({
    page1Reducer,
    page2Reducer,
})

export default reducers;