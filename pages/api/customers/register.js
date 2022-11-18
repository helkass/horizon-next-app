import db from "../../../utils/db";
import { register } from "../../../controllers/customers";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "POST":
      register(req, res);
      break;
    default:
      res.status(405).end();
  }
}
