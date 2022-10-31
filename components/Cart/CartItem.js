import React from 'react';
import Button from '../atoms/Button/Button';
import Image from 'next/image';
import { urlFor } from '../../sanity';
import Link from 'next/link';
import { useStoreContext } from '../../store/context/store';
import { actionType } from '../../store/reducer/storeReducer';

const CartItem = ({ slug, image, title, _id }) => {
    const { dispatch } = useStoreContext();

    const removeProduct = (id) => {
        dispatch({ type: actionType.REMOVE_PRODUCT, payload: id });
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
                    <p className="text-sm font-medium text-gray-900">
                        {title} x quantity
                    </p>
                </Link>

                <input
                    type="number"
                    className="border border-amber-700 border-solid"
                />
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
