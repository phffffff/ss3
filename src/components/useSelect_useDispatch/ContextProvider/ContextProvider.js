import React, { createContext, useReducer } from "react";

import fakeReducer, { initState } from '../reducers/fakeReducer';

const Context = createContext();

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(fakeReducer, initState);

    const store = { state, dispatch };
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
export {
    Context
}