import db from "../../../utils/db";
import { getCustomers, login } from "../../../controllers/customers";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "GET":
      getCustomers(req, res);
      break;
    case "POST":
      login(req, res);
      break;
    default:
      res.status(405).end();
  }
}
