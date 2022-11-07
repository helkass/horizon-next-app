import db from "../../../utils/db";
import {
  getCoffeePacks,
  postCoffeePack,
} from "../../../controllers/coffeePackController";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "GET":
      getCoffeePacks(req, res);
      break;
    case "POST":
      postCoffeePack(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end();
  }
}
