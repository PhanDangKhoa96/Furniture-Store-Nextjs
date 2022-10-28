import React from 'react';
import constants from '../../constants/constants';

const StoreReducer = (state, { type, payload }) => {
    switch (type) {
        case constants.ADD_TO_CART: {
            const newCart = [...state, payload];
            localStorage.setItem('myCart', JSON.stringify(newCart));
            return newCart;
        }
        case constants.INIT_STORE: {
            return [...payload];
        }
    }
    return [...state];
};

export default StoreReducer;
