const URL = process.env.BASE_URL;

//   POST || for create a new admin
export async function addAdmin(formData) {
  try {
    const Options = {
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`${URL}api/admin`, Options);
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

// GET all products
export const getAdmins = async () => {
  const res = await fetch(`${URL}api/admin`);
  const data = await res.json();

  return data;
};
