const URL = process.env.BASE_URL;

export const getCoffeePacks = async () => {
  const res = await fetch("http://localhost:3000/api/coffee_packs");
  const data = await res.json();

  return data;
};

// POST
export async function addCoffeePack(formData) {
  try {
    const Options = {
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(`http://localhost:3000/api/coffee_packs`, Options);
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteCoffeePack(packId) {
  const Options = {
    method: "DELETE",
    Headers: { "Content-Type": "application/json" },
  };
  const res = await fetch(
    `http://localhost:3000/api/coffee_packs/${packId}`,
    Options
  );
  const data = await res.json();
  return data;
}
