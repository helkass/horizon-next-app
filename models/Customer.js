import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: false,
  },
  city: {
    type: String,
    require: false,
  },
  province: {
    type: String,
    require: false,
  },
  profilPic: {
    type: String,
    require: false,
  },
  phone: {
    type: String,
    require: false,
  },
});
module.exports =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
