import db from "../../../utils/db";
import {
  deleteGallery,
  postGallery,
  putGallery,
} from "../../../controllers/gallery";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "POST":
      postGallery(req, res);
      break;
    case "PUT":
      putGallery(req, res);
      break;
    case "DELETE":
      deleteGallery(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST", "PUT", "DELETE"]);
      res.status(405).end();
  }
}
