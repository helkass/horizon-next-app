import db from "../../../utils/db";
import {
  deleteGallery,
  getGallerys,
  postGallery,
  putGallery,
} from "../../../controllers/gallery";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "GET":
      getGallerys(req, res);
      break;
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
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end();
  }
}
