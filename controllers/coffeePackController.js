import CoffeePack from "../models/CoffeePack";

// GET all data
export async function getCoffeePacks(req, res) {
  try {
    const pack = await CoffeePack.find({});

    if (!pack) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(pack);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data!" });
  }
}

export async function getCoffeePackById(req, res) {
  try {
    const { packId } = req.query;

    if (packId) {
      const Coffee = await CoffeePack.findById(packId);
      return res.status(200).json(Coffee);
    }
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Product...!" });
  }
}

//   POST
export async function postCoffeePack(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not Provided" });
    CoffeePack.create(formData, function (data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json(error);
  }
}
// PUT http://localhost:3000/api/pack/id
export async function putPack(req, res) {
  try {
    const { packId } = req.query;
    const formData = req.body;
    if (packId && formData) {
      const pack = await CoffeePack.findByIdAndUpdate(packId, formData);
      res.status(200).json(pack);
    }
  } catch (error) {
    return res.status(404).json({ error: "error while updating data" });
  }
}

// DELETE http://localhost:3000/api/products
export async function deletePack(req, res) {
  try {
    const { packId } = req.query;

    if (packId) {
      const pack = await CoffeePack.findByIdAndDelete(packId);
      return res.status(200).json(pack);
    }
  } catch (error) {
    res.status(404).json({ error: "Error Deteleting The Product" });
  }
}
