import React from 'react';
import Button from '../atoms/Button/Button';
import Image from 'next/image';
import { urlFor } from '../../sanity';
import Link from 'next/link';
import { useStoreContext } from '../../store/context/store';
import { actionType } from '../../store/reducer/storeReducer';

const CartItem = ({ slug, image, title, _id, quantity }) => {
    const { dispatch } = useStoreContext();

    const removeProduct = (id) => {
        dispatch({ type: actionType.REMOVE_PRODUCT, payload: id });
    };

    const increaseQuantity = (id) => {
        dispatch({ type: actionType.INCREASE_QUANTITY, payload: id });
    };

    const decreaseQuantity = (id) => {
        dispatch({ type: actionType.DECREASE_QUANTITY, payload: id });
    };
    return (
        <div className="-m-3 flex items-center rounded-lg p-2">
            <Link href={`/product/${slug}`}>
                <div className="relative aspect-square h-10 w-10 sm:h-12 sm:w-12">
                    <Image
                        src={urlFor(image).url()}
                        layout="fill"
                        alt={title}
                    />
                </div>
            </Link>

            <div className="ml-4 flex-auto">
                <Link href={`/product/${slug}`}>
                    <p className="text-sm font-medium text-gray-900 mb-2">
                        {title} x {quantity}
                    </p>
                </Link>

                <div className="flex items-center">
                    <button
                        className={`text-lg aspect-square h-7 text-white ${
                            quantity <= 1 ? 'bg-gray-300' : 'bg-wenge'
                        }`}
                        onClick={() => {
                            decreaseQuantity(_id);
                        }}
                        disabled={quantity <= 1}>
                        -
                    </button>
                    <input
                        type="text"
                        value={quantity}
                        className="border border-wenge border-solid w-10 text-center h-7"
                    />

                    <button
                        className="text-lg aspect-square h-7 bg-wenge text-white"
                        onClick={() => {
                            increaseQuantity(_id);
                        }}>
                        +
                    </button>
                </div>
            </div>

            <button
                className="w-5"
                onClick={() => {
                    removeProduct(_id);
                }}>
                <i className="ri-delete-bin-line"></i>
            </button>
        </div>
    );
};

export default CartItem;
