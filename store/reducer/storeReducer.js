import React from 'react';
import constants from '../../constants/constants';

const StoreReducer = (state, {type, payload}) => {
    switch (type) {
        case constants.ADD_TO_CART: {
            const cart = [...state];
            // const product = cart.find((p) => p._id === payload._id);

            cart.map((item) => {
                if (item._id === payload._id) {
                    console.log(item.quantity + 1, 'reducer 1');

                    return item.quantity + 1;
                }
            });
            console.log(cart, 'reducer 2');

            return cart;
            // if (index !== -1) {
            //     console.log(cart[index].quantity++, cart);
            //     // cart[index].quantity++;
            //     return cart;
            // }

            // const newCart = [...cart, { ...payload, quantity: 1 }];
            //
            // localStorage.setItem('myCart', JSON.stringify(newCart));
            //
            // return newCart;
        }
        case constants.INIT_STORE: {
            return [...payload];
        }
    }
    return [...state];
};

export default StoreReducer;
