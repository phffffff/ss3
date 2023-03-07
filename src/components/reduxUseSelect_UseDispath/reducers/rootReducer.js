import { combineReducers } from "redux";

import fakeReducer from "./fakeReducer";

const rootReducer = combineReducers({
    stateFake: fakeReducer,
})