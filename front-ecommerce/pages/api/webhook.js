import { mongooseConnect } from "../../lib/mongoose.js";
import { buffer } from "micro";
import { Order } from "../../models/Order.js";
const stripe = require("stripe")(process.env.STRIPE_SK);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  await mongooseConnect();

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    console.log("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      const orderId = data.metadata?.orderId;

      if (orderId) {
        const updatedOrder = await Order.findByIdAndUpdate(
          orderId,
          { paid: true },
          { new: true }
        );
        console.log("Order updated:", updatedOrder);
      }
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send("ok");
}
