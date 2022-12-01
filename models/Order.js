import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
      required: true,
      maxLength: 80,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    response_midtrans: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
