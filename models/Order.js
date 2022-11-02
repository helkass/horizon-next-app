import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 80,
    },
    company: {
      type: String,
      required: false,
      maxLength: 60,
    },
    address: {
      type: String,
      required: true,
      maxLength: 150,
    },
    phone: {
      type: Number,
      required: true,
      maxLength: 15,
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
    },
    note: {
      type: String,
      required: false,
      maxLength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    prices: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: String,
      default: "COD",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
