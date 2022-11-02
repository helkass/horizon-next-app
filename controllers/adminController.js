import Admin from "../models/Admin";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import cookie from "cookie";
// get all admin
export async function getAdmins(req, res) {
  // const { push } = useRouter();
  try {
    // const { email, password } = req.body;
    // const data = req.body
    const admin = await Admin.find({});

    if (!admin) return res.status(404).json({ error: "Data not found!" });
    res.status(200).json(admin);
    console.log("data founded");
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data!" });
    console.log("data not found");
  }
}

//   create a new admin
export async function addAdmin(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form data not Provided" });

    // cheking duplicate data
    const check = await Admin.findONe(formData);
    if (check) return res.status(422).json({ message: "Admin Already" });

    // perivied?
    Admin.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json(error);
  }
}

export async function loginHandler(req, res) {
  const invalidUrl = "/admin/login";

  try {
    const email = req.body.email;
    const password = req.body.password;
    const adminEmail = await Admin.findOne({
      email: email,
    });
    if (adminEmail.password === password) {
      const url = "/admin";
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60 * 24, //1 day
          sameSite: "strict",
          path: "/",
        })
      );
      // router.push("/admin");
      // res.status(200).json("SUCCESS");
      res.redirect("/admin");
    } else {
      res.redirect(invalidUrl);
    }
  } catch (error) {
    res.redirect(invalidUrl);
  }
}
