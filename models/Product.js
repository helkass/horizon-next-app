import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxLength: 200,
    },
    img: {
      type: String,
    },
    medium: {
      type: Number,
    },
    large: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
