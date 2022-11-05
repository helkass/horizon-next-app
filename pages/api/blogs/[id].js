import db from "../../../utils/db";
import { getBlogById } from "../../../controllers/blogs";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "GET":
      getBlogById(req, res);
      break;
    default:
      res.status(405).end();
  }
}
