import React from 'react';
import { useStoreContext } from '../store/context/store';

const Checkout = () => {
    const { state } = useStoreContext();
    console.log(state);
    return (
        <div className="grid-cols-2 grid container">
            <div>
                {state?.map((item) => {
                    return (
                        <div key={item._id}>
                            <p>
                                {item.title} x {item.quantity}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Checkout;
