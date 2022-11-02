const BASE_URL = "http://localhost:3000/";

//   POST || for create a new admin
export async function addAdmin(formData) {
  try {
    const Options = {
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`${BASE_URL}api/admin`, Options);
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

// GET all products
export const getAdmins = async () => {
  const res = await fetch(`${BASE_URL}api/admin`);
  const data = await res.json();

  return data;
};

// export async function login(req, res) {
//   const { email, password } = req.body;
//   const result = await Admin.findOne({ email, password });

//   if (result) {
//     res.status(200).render("index");
//   } else {
//     req.status(404).json({ error: "login gagal" });
//   }
// }
