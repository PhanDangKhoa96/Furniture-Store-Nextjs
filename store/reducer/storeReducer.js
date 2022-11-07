import React from 'react';
import setLocalstorage from '../../helper/setLocalstorage';

export const actionType = {
    ADD_TO_CART: 'ADD_TO_CART',
    INIT_STORE: 'INIT_STORE',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    EMPTY_CART: 'EMPTY_CART',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY'
};

const StoreReducer = (state, { type, payload }) => {
    switch (type) {
        case actionType.ADD_TO_CART: {
            const product = state.find((item) => item._id === payload._id);
            if (product) {
                const newCart = state.map((p) => {
                    if (p._id === payload._id)
                        return { ...p, quantity: p.quantity + 1 };
                    return p;
                });
                setLocalstorage(newCart);
                return newCart;
            }

            const newCart = [...state, { ...payload, quantity: 1, price: 100 }];
            setLocalstorage(newCart);
            return newCart;
        }
        case actionType.INIT_STORE: {
            return [...payload];
        }
        case actionType.EMPTY_CART: {
            setLocalstorage([]);

            return [];
        }
        case actionType.REMOVE_PRODUCT: {
            const newCart = state.filter((product) => product._id !== payload);

            setLocalstorage(newCart);
            return newCart;
        }
        case actionType.INCREASE_QUANTITY: {
            const newState = state.map((p) => {
                if (p._id === payload)
                    return { ...p, quantity: p.quantity + 1 };
                return p;
            });

            setLocalstorage(newState);
            return newState;
        }
        case actionType.DECREASE_QUANTITY: {
            const newState = state.map((p) => {
                if (p._id === payload)
                    return { ...p, quantity: p.quantity - 1 };
                return p;
            });

            setLocalstorage(newState);
            return newState;
        }
    }
    return state;
};

export default StoreReducer;
