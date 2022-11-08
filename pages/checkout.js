import React, { useState } from 'react';
import { useStoreContext } from '../store/context/store';
import { fetchPostJSON } from '../utils/fetchPostJSON';
import getStripe from '../utils/get-stripejs';

const Checkout = () => {
    const { state } = useStoreContext();
    const [loading, setLoading] = useState(false);

    const createCheckoutSession = async () => {
        setLoading(true);

        const response = await fetch(`/api/checkout_sessions`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            redirect: 'follow', // manual, *follow, error
            body: JSON.stringify(state || {}) // body data type must match "Content-Type" header
        });

        console.log(response);

        // const checkoutSession = await response.json();

        // // Internal Server Error
        // if (checkoutSession?.statusCode === 500) {
        //     console.error(checkoutSession.message);
        //     return;
        // }
        //
        // // Redirect to checkout
        const stripe = await getStripe();
        // const { error } = await stripe.redirectToCheckout({
        //     // Make the id field from the Checkout Session creation API response
        //     // available to this file, so you can provide it as parameter here
        //     // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        //     sessionId: checkoutSession?.id
        // });
        //
        // // If `redirectToCheckout` fails due to a browser or network
        // // error, display the localized error message to your customer
        // // using `error.message`.
        // console.warn(error.message);
        //
        // setLoading(false);
    };
    return (
        <div className="grid-cols-2 grid container">
            <div>
                <button
                    className="px-10 py-20 bg-amber-500 text-white"
                    onClick={createCheckoutSession}>
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

export default Checkout;
