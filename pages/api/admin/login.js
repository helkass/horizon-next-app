import db from "../../../utils/db";
import Admin from "../../../models/Admin";

db.connect();

export async function loginHandler(req, res) {
  const invalidUrl = "/admin/login";
  // const router = useRouter();

  if (req.method === "POST") {
    const { email, password } = req.body;
    const adminEmail = await Admin.findOne({
      email: email,
    });
    if (adminEmail.password === password) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60 * 24, //1 day
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("SUCCESS");
      console.log("match");
    } else {
      res.redirect(invalidUrl);
    }
  } else {
    res.redirect(invalidUrl);
  }
}
