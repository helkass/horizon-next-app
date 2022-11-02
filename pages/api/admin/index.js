import db from "../../../utils/db";
import {
  addAdmin,
  getAdmins,
  login,
  loginHandler,
} from "../../../controllers/adminController";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "GET":
      getAdmins(req, res);
      // loginHandler(req, res);
      break;
    case "POST":
      // addAdmin(req, res);
      loginHandler(req, res);
      break;
    default:
      // res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end();
  }
}
