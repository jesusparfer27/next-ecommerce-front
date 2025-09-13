// pages/api/cart.js
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  await mongooseConnect();

  if (req.method === "POST") {
    try {
      const ids = req.body.ids; // array de IDs enviados desde el frontend

      if (!ids || !Array.isArray(ids)) {
        return res.status(400).json({ error: "Invalid ids" });
      }

      // Buscar todos los productos cuyos _id estén en el array
      const products = await Product.find({ _id: { $in: ids } });

      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
