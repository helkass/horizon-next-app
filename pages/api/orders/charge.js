import Order from "../../../models/Order";
import midtransClient from "midtrans-client";
// Create Core API instance
let coreApi = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: "SB-Mid-server-Fjb24fPlrZGpDgqTTEdUzwpd",
  clientKey: "SB-Mid-client-wMqxu3DX8bh-NyoJ",
});

// POST http://localhost:3000/api/orders
export default async function createOrder(req, res) {
  coreApi
    .charge(req.body)
    .then((chargeResponse) => {
      const orderData = {
        order_id,
        customerId,
        products,
        response_midtrans: JSON.stringify(chargeResponse),
      };

      res.status(200).json(chargeResponse);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}
