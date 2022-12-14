import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState
} from 'react';
import StoreReducer, { actionType } from '../reducer/storeReducer';

export const StoreContext = createContext(undefined);
const StoreProvider = ({ children }) => {
    const initialState = [];
    const [cart, setCart] = useState(initialState);
    const [state, dispatch] = useReducer(StoreReducer, cart);

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('myCart'));

        if (localCart) {
            dispatch({ type: actionType.INIT_STORE, payload: localCart });
        }
    }, []);

    useEffect(() => {
        if (cart !== initialState) {
            localStorage.setItem('myCart', JSON.stringify(cart));
        }
    }, [cart]);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStoreContext = () => {
    return useContext(StoreContext);
};

export default StoreProvider;
