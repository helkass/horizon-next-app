const BASE_URL = "http://localhost:3000/";

// get all blogs data
export const getBlogs = async () => {
  const res = await fetch(`${BASE_URL}api/blogs`);
  const data = await res.json();

  return data;
};

// POST
export async function addBlog(formData) {
  try {
    const Options = {
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`${BASE_URL}api/blogs`, Options);
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}
export async function deleteBlog(blogId) {
  const Options = {
    method: "DELETE",
    Headers: { "Content-Type": "application/json" },
  };
  const res = await fetch(`${BASE_URL}api/blogs/${blogId}`, Options);
  const data = await res.json();
  return data;
}
