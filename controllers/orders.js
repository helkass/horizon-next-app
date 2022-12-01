import Order from "../models/Order";

// GET http://localhost:3000/api/orders
// req all orders
export async function getOrders(req, res) {
  try {
    const orders = await Order.find({});

    if (!orders) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data!" });
  }
}

// req individual order
// GET http://localhost:3000/api/orders/[orderId]
export async function getOrderId(req, res) {
  try {
    const { orderId } = req.query;

    if (orderId) {
      const order = await Order.findById(orderId);
      return res.status(200).json(order);
    }
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Product...!" });
  }
}
