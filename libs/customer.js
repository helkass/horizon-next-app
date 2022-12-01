const URL = process.env.URL;

// GET all products
export const getCustomers = async () => {
  const res = await fetch(`http://localhost:3000/api/customers`);
  const data = await res.json();

  return data;
};

// GET individual customer
export const getCustomerId = async (customerId) => {
  const res = await fetch(`http://localhost:3000/api/customers/${customerId}`);
  const data = await res.json();

  if (data) return data;
  return {};
};

// UPDATE Product
export async function updateCustomer(customerId, formData) {
  const Options = {
    method: "PUT",
    Headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const res = await fetch(
    `http://localhost:3000/api/customers/?customerId=${customerId}`,
    Options
  );

  return res;
}
