import Blog from "../models/Blog";

// GET all data
export async function getBlogs(req, res) {
  try {
    const Blogs = await Blog.find({});

    if (!Blogs) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(Blogs);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data!" });
  }
}

export async function getBlogById(req, res) {
  try {
    const { blogId } = req.query;

    if (blogId) {
      const blog = await Blog.findById(blogId);
      return res.status(200).json(blog);
    }
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Product...!" });
  }
}

//   POST
export async function postBlog(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not Provided" });
    Blog.create(formData, function (data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json(error);
  }
}

// DELETE http://localhost:3000/api/blogs
export async function deleteBlog(req, res) {
  try {
    const { blogId } = req.query;

    if (blogId) {
      const blog = await Blog.findByIdAndDelete(blogId);
      return res.status(200).json(blog);
    }
  } catch (error) {
    res.status(404).json({ error: "Error Deteleting The Product" });
  }
}
