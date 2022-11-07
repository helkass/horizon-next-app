const BASE_URL = "http://localhost:3000/";

// GET all products
export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}api/products`);
  const data = await res.json();

  return data;
};

// GET individual product
export const getProduct = async (productId) => {
  const res = await fetch(`${BASE_URL}api/products/${productId}`);
  const data = await res.json();

  if (data) return data;
  return {};
};

// POST Product
export async function addProduct(formData) {
  try {
    const Options = {
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`${BASE_URL}api/products`, Options);
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

// UPDATE Product
export async function updateProduct(productId, formData) {
  const Options = {
    method: "PUT",
    Headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const res = await fetch(
    `${BASE_URL}api/products/?productId=${productId}`,
    Options
  ).then((res) => res.json());
  // const data = await res.json();

  return res;
}

// DELETE Product
export async function deleteProduct(productId) {
  const Options = {
    method: "DELETE",
    Headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const res = await fetch(`${BASE_URL}api/products`, Options);
  const data = await res.json();
}
