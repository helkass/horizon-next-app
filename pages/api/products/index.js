import db from "../../../utils/db";
import {
  deleteProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../../../controllers/product";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "GET":
      getProducts(req, res);
      break;
    case "POST":
      postProduct(req, res);
      break;
    case "PUT":
      putProduct(req, res);
      break;
    case "DELETE":
      deleteProduct(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end();
  }
}
