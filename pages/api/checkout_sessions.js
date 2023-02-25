const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      // const session = await stripe.checkout.sessions.create({
      //   submit_type: "pay",
      //   billing_address_collection: "auto",
      //   shipping_address_collection: {
      //     allowed_countries: ["US", "CA"],
      //   },
      //   line_items: [
      //     {
      //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //       price: "price_1MepScKFOMyJg43wWM3uLzxv",
      //       quantity: 1,
      //     },
      //   ],
      //   mode: "payment",
      //   success_url: `${req.headers.origin}/checkout-success`,
      //   cancel_url: `${req.headers.origin}/?canceled=true`,
      //   automatic_tax: { enabled: true },
      // });
      const session = await stripe.checkout.sessions.create({
        billing_address_collection: "auto",
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        line_items: [
          {
            price_data: {
              currency: "cad",
              product_data: {
                name: "Random Custom Line Item",
                description: "This is a test subject 2",
              },
              tax_behavior: "inclusive",
              unit_amount: 550000.0, // cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/checkout-success`,
        cancel_url: `${req.headers.origin}`,
        automatic_tax: { enabled: true },
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
