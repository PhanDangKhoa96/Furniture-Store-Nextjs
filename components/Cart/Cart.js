import React, { Fragment, useContext } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { StoreContext } from '../../store/context/store';
import { Else, If, Then } from 'react-if';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import { urlFor } from '../../sanity';
import Link from 'next/link';
import Button from '../atoms/Button/Button';
import CartItem from './CartItem';
import { actionType } from '../../store/reducer/storeReducer';

const Cart = () => {
    const { state, dispatch } = useContext(StoreContext);

    const emptyCart = () => {
        dispatch({ type: actionType.EMPTY_CART });
    };

    return (
        <div className="max-w-sm mr-8">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                            <ShoppingCartIcon
                                className={`${open ? '' : 'text-opacity-70'}
                   h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                            />
                            {state.length}
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                            <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-sm px-4 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black bg-white ring-opacity-5">
                                    <If condition={!isEmpty(state)}>
                                        <Then>
                                            <div className="relative grid gap-8 bg-white p-7">
                                                {state.map((item) => (
                                                    <CartItem
                                                        {...item}
                                                        key={item._id}
                                                    />
                                                ))}
                                            </div>
                                        </Then>

                                        <Else>
                                            <div>no data</div>
                                        </Else>
                                    </If>

                                    <button
                                        className="my-10"
                                        onClick={() => {
                                            emptyCart();
                                        }}>
                                        Empty cart
                                    </button>

                                    <div className="mt-5 border border-solid">
                                        <Button>View Cart</Button>
                                        <Button>Checkout</Button>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
};

export default Cart;
