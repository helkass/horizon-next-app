import Customer from "../models/Customer";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { setCookie } from "cookies-next";
const SECRET = process.env.SECRET;
const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: "2d" });
};

// POST http://localhost:3000/api/customer/register
export async function register(req, res) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    const newCustomer = new Customer({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashPass,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      province: req.body.province,
      profilePic: req.body.profilePic,
    });
    Customer.create(newCustomer, function (data) {
      const token = createToken(data._id);
      setCookie("customer", token.toString());
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json(error);
  }
}

// req all customers
export async function getCustomers(req, res) {
  try {
    const customers = await Customer.find({});

    if (!customers) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data!" });
  }
}

// req individual customer
// GET http://localhost:3000/api/customers/[customerId]
export async function getCustomer(req, res) {
  try {
    const { customerId } = req.query;

    if (customerId) {
      const customer = await Customer.findById(customerId);
      return res.status(200).json(customer);
    }
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Product...!" });
  }
}
// post api/customers/[customerId]
export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(401).json({ error: "wrong email!" });
    }
    const validate = bcrypt.compare(password, customer.password);
    !validate && res.status(404).json({ error: "wrong password!" });
    const token = createToken(customer._id);
    setCookie("customer", token.toString());
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json(error);
  }
}

// DELETE http://localhost:3000/api/customers
export async function deleteCustomer(req, res) {
  try {
    const { customerId } = req.query;

    if (customerId) {
      const customer = await Customer.findByIdAndDelete(customerId);
      return res
        .status(200)
        .json({ message: customer._id + " has been deleted!" });
    }
  } catch (error) {
    res.status(404).json({ error: "Error Deteleting The Product" });
  }
}

// PUT http://localhost:3000/api/products
export async function updateCustomer(req, res) {
  try {
    const { customerId } = req.query;
    const formData = req.body;
    if (customerId && formData) {
      const customer = await Customer.findByIdAndUpdate(customerId, formData);
      res.status(200).json("data updated : ", customer);
    }
  } catch (error) {
    return res.status(404).json({ error: "error while updating data" });
  }
}
