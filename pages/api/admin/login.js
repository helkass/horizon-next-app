import db from "../../../utils/db";
import Admin from "../../../models/Admin";
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};
db.connect();

export async function loginHandler(req, res) {
  const invalidUrl = "/admin/login";
  // const router = useRouter();

  if (req.method === "POST") {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin.password === password) {
      // res.setHeader(
      //   "Set-Cookie",
      //   cookie.serialize("token", process.env.TOKEN, {
      //     maxAge: 60 * 60 * 24, //1 day
      //     sameSite: "strict",
      //     path: "/",
      //   })
      // );
      const token = createToken(admin._id);
      res.status(200).json({ email, token });
      console.log("match");
    } else {
      res.redirect(invalidUrl);
    }
  } else {
    res.redirect(invalidUrl);
  }
}
