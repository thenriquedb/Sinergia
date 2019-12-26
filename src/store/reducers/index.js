import {combineReducers} from 'redux';

import houseReducer from './houseReducer';
// import equipmentsReducer from './equipmentsReducer';

const reducers = combineReducers({houseReducer});

export default reducers;
