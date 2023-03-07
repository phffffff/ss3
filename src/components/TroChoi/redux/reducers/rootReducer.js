import { combineReducers } from 'redux';

import trochoiReducer from './trochoiReducer'

const rootRuducer = combineReducers({
    trochoiReducer: trochoiReducer,
})

export default rootRuducer;
