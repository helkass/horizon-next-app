const BASE_URL = "http://localhost:3000/";

// GET all products
export const getGallerys = async () => {
  const res = await fetch(`${BASE_URL}api/galleries`);
  const data = await res.json();

  return data;
};

// GET individual product
export const getGallery = async (galleryId) => {
  const res = await fetch(`${BASE_URL}api/galleries/${galleryId}`);
  const data = await res.json();

  if (data) return data;
  return {};
};

// POST Product
export async function addGallery(formData) {
  try {
    const Options = {
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`${BASE_URL}api/galleries`, Options);
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

// UPDATE Product
export async function updateGallery(galleryId, formData) {
  const Options = {
    method: "POST",
    Headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const res = await fetch(`${BASE_URL}api/galleries/${galleryId}`, Options);
  const data = await res.json();

  return data;
}

// DELETE Product
export async function deleteGallery(galleryId) {
  const Options = {
    method: "DELETE",
    Headers: { "Content-Type": "application/json" },
  };
  const res = await fetch(`${BASE_URL}api/galleries`, Options);
  const data = await res.json();

  return data;
}
