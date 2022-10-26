import React, { createContext, useReducer } from 'react';
import StoreReducer from '../reducer/storeReducer';

export const StoreContext = createContext(undefined);
const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
        StoreReducer,
        ['lab', 'hao'],
        undefined
    );
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
