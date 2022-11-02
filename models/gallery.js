import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxLength: 1000,
    },
    img: {
      type: String,
    },
    writer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Gallery ||
  mongoose.model("Gallery", GallerySchema);
