import db from "../../../utils/db";
import {
  addAdmin,
  getAdmins,
  loginHandler,
} from "../../../controllers/adminController";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "GET":
      getAdmins(req, res);
      break;
    case "POST":
      // addAdmin(req, res);
      loginHandler(req, res);
      break;
    default:
      res.status(405).end();
  }
}
