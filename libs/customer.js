const url = process.env.URL;

// GET all products
export const getCustomers = async () => {
  const res = await fetch(`http://localhost:3000/api/customers`);
  const data = await res.json();

  return data;
};
