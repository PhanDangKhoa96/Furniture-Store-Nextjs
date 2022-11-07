import Stripe from 'stripe';
import { urlFor } from '../../sanity';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-08-01'
});

export default async function handler(req, res) {
    console.log('checkout sessions', req, res);
    if (req.method === 'POST') {
        const { items } = req.body;

        const transformedItems = items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.title,
                    images: urlFor(item.image.url())
                },
                unit_amount: item.price
            },
            quantity: item.quantity
        }));

        try {
            const params = {
                payment_method_types: ['card'],
                line_items: transformedItems,
                payment_intent_data: {},
                mode: 'payment',
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/checkout`,
                metadata: {
                    images: JSON.stringify(items.map((item) => item.image))
                }
            };

            const checkoutSession = await stripe.checkout.sessions.create(
                params
            );

            res.status(200).json(checkoutSession);
        } catch (err) {
            const errorMessage = err?.message
                ? err.message
                : 'Internal Sever Error';
            res.status(500).json({ statusCode: 500, message: errorMessage });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
