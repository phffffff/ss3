import { createStore } from "redux";

import rootRuducer from "./reducers/rootReducer";

const store = createStore(rootRuducer);

export default store;