import CoffeePack from "../models/CoffeePack";

// GET all data
export async function getCoffeePacks(req, res) {
  try {
    const CoffeePacks = await CoffeePack.find({});

    if (!CoffeePacks) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(CoffeePacks);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data!" });
  }
}

export async function getCoffeePackById(req, res) {
  try {
    const { id } = req.query;

    if (id) {
      const Coffee = await CoffeePack.findById(id);
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
