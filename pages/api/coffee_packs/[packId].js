import db from "../../../utils/db";
import {
  getCoffeePackById,
  putPack,
} from "../../../controllers/coffeePackController";

export default async function handler(req, res) {
  db.connect();
  const { method } = req;

  switch (method) {
    case "GET":
      getCoffeePackById(req, res);
      break;
    case "PUT":
      putPack(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end();
  }
}
