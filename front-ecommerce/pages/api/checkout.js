import { mongooseConnect } from "../../lib/mongoose.js";
import { Order } from "../../models/Order.js";
import { Product } from "../../models/Product.js";
const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, use POST' });
  }

  const { name, email, city, postalCode, streetAddress, country, cartProducts } = req.body;

  await mongooseConnect();

  const uniqueIds = [...new Set(cartProducts)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  const line_items = [];

  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(p => p._id.toString() === productId);
    const quantity = cartProducts.filter(id => id === productId).length;

    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: 'USD',
          product_data: { name: productInfo.title },
          unit_amount: productInfo.price * 100, // Stripe espera el precio por unidad en cents
        },
      });
    }
  }

  // Crear orden en MongoDB
  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  // Crear sesión de Stripe
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: `${process.env.PUBLIC_URL}/cart?success=1`,
    cancel_url: `${process.env.PUBLIC_URL}/cart?canceled=1`,
    metadata: { orderId: orderDoc._id.toString() },
  });

  res.json({ url: session.url });
}
