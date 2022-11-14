import db from "../../../utils/db";
import { getBlogs, postBlog, deleteBlog } from "../../../controllers/blogs";

export default async function handler(req, res) {
  const { method } = req;

  // call func
  db.connect();

  switch (method) {
    case "GET":
      getBlogs(req, res);
      break;
    case "POST":
      postBlog(req, res);
      break;
    case "DELETE":
      deleteBlog(req, res);
      break;
    default:
      res.status(405).end();
  }
}
