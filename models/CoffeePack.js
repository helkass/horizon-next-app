import mongoose from "mongoose";

const CoffeePackSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 60,
    },
    desc: {
      type: String,
      maxLength: 200,
    },
    img: {
      type: String,
    },
    size: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.models.CoffeePack ||
  mongoose.model("CoffeePack", CoffeePackSchema);
