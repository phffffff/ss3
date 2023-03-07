import { combineReducers } from 'redux'
import themeReducer from './themeReducer/themReducer'
import todoReducer from './todoReducer/todoReducer'

const rootReducer = combineReducers({
    stateThemes: themeReducer,
    stateTodo: todoReducer,
});

export default rootReducer;