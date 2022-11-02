import db from "../../../utils/db";
import {
  deleteProduct,
  getProduct,
  putProduct,
} from "../../../controllers/product";

export default async function handler(req, res) {
  db.connect();
  const { method } = req;

  switch (method) {
    case "GET":
      getProduct(req, res);
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
