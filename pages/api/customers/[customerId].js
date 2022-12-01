import db from "../../../utils/db";
import {
  deleteCustomer,
  getCustomer,
  updateCustomer,
} from "../../../controllers/customers";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "GET":
      getCustomer(req, res);
      break;
    case "PUT":
      updateCustomer(req, res);
      break;
    case "DELETE":
      deleteCustomer(req, res);
      break;
    default:
      res.status(405).end();
  }
}
