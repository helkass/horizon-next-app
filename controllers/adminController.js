import Admin from "../models/Admin";
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: "2d" });
};
// get all admin
export async function getAdmins(req, res) {
  try {
    const admin = await Admin.find({});

    if (!admin) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data!" });
  }
}

// create  / signup a new admin
export async function addAdmin(req, res) {
  const { email, password } = req.body;
  try {
    if (!{ email, password })
      return res.status(404).json({ error: "Form data not Provided" });

    // cheking duplicate data
    const check = await Admin.findOne({ email, password });
    if (check) return res.status(422).json({ message: "Admin Already exist" });
    // perivied?
    const admin = await Admin.create({ email, password });
    const token = createToken(admin._id);
    res.status(200).json({ email, token });
  } catch (error) {
    return res.status(404).json(error);
  }
}

export async function loginHandler(req, res) {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ error: "your not admin" });
    }

    if (admin.password === password) {
      const token = createToken(admin._id);
      res.status(200).json({ email, token });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
