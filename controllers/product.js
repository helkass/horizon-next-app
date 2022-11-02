import Product from "../models/Product";
const cloudinary = require("../utils/cloudinary");

// GET http://localhost:3000/api/products
// req all products
export async function getProducts(req, res) {
  try {
    const products = await Product.find({});

    if (!products) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data!" });
  }
}

// req individual product
// GET http://localhost:3000/api/products/[productId]
export async function getProduct(req, res) {
  try {
    const { productId } = req.query;

    if (productId) {
      const product = await Product.findById(productId);
      return res.status(200).json(product);
    }
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Product...!" });
  }
}

// POST http://localhost:3000/api/products
export async function postProduct(req, res) {
  // const { title, desc, prices, img } = req.body;

  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not Provided" });
    Product.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json(error);
  }
}

// PUT http://localhost:3000/api/products
export async function putProduct(req, res) {
  try {
    const { productId } = req.query;
    const formData = req.body;
    if (productId && formData) {
      const product = await Product.findByIdAndUpdate(productId, formData);
      res.status(200).json(product);
    }
  } catch (error) {
    return res.status(404).json({ error: "error while updating data" });
  }
}

// DELETE http://localhost:3000/api/products
export async function deleteProduct(req, res) {
  try {
    const { productId } = req.query;

    if (productId) {
      const product = await Product.findByIdAndDelete(productId);
      return res.status(200).json(product);
    }
  } catch (error) {
    res.status(404).json({ error: "Error Deteleting The Product" });
  }
}
