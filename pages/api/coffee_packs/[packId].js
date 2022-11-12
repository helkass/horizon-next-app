import db from "../../../utils/db";
import {
  getCoffeePackById,
  putPack,
  deletePack,
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
    case "DELETE":
      deletePack(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end();
  }
}
