const express = require('express');
const stripe = require('stripe')('your-secret-key'); // Your secret Stripe API key
const app = express();

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: { name: 'Forex Trading Deposit' },
                unit_amount: 1000, // $10 in cents
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'https://yourwebsite.com/success',
        cancel_url: 'https://yourwebsite.com/cancel',
    });

    res.json({ url: session.url });
});

app.listen(3000, () => console.log('Server running on port 3000'));
