import React from 'react';
import setLocalstorage from '../../helper/setLocalstorage';

export const actionType = {
    ADD_TO_CART: 'ADD_TO_CART',
    INIT_STORE: 'INIT_STORE',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    EMPTY_CART: 'EMPTY_CART',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY'
};

const StoreReducer = (state, { type, payload }) => {
    switch (type) {
        case actionType.ADD_TO_CART: {
            const product = state.find((item) => item._id === payload._id);
            if (product) {
                product.quantity++;
                setLocalstorage([...state]);
                return [...state];
            }
            const newCart = [...state, { ...payload, quantity: 1 }];
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
            const product = state.find((item) => item._id === payload);
            console.log(product);
            const newCart = state.filter((product) => product._id !== payload);
            product.quantity++;
            setLocalstorage([...state]);
            return [...state];
        }
    }
    return state;
};

export default StoreReducer;
