import Gallery from "../models/Gallery";

// GET http://localhost:3000/api/gallerys
// req all gallery
export async function getGallerys(req, res) {
  try {
    const gallerys = await Gallery.find({});

    if (!gallerys) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(gallerys);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data!" });
  }
}

// req individual gallery
// GET http://localhost:3000/api/gallerys/[galleryId]
export async function getGallery(req, res) {
  try {
    const { galleryId } = req.query;

    if (galleryId) {
      const gallery = await Gallery.findById(galleryId);
      return res.status(200).json(gallery);
    }
  } catch (error) {
    res.status(404).json({ error: "Error while Fetching Gallery...!" });
  }
}

// POST http://localhost:3000/api/products
export async function postGallery(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not Provided" });
    Gallery.create(formData, function (data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json(error);
  }
}

// PUT http://localhost:3000/api/products
export async function putGallery(req, res) {
  try {
    const { galleryId } = req.query;
    const formData = req.body;
    if (galleryId && formData) {
      const gallery = await Gallery.findByIdAndUpdate(galleryId, formData);
      res.status(200).json(gallery);
    }
  } catch (error) {
    return res.status(404).json({ error: "error while updating data" });
  }
}

// DELETE http://localhost:3000/api/products
export async function deleteGallery(req, res) {
  try {
    const { galleryId } = req.query;

    if (galleryId) {
      const gallery = await Gallery.findByIdAndDelete(galleryId);
      return res.status(200).json(gallery);
    }
  } catch (error) {
    res.status(404).json({ error: "Error Deteleting The Gallery" });
  }
}
